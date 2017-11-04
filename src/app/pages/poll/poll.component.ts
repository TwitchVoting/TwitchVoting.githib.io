import { ActivatedRoute } from '@angular/router';
import {
  Component,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import { HttpService } from '../../services/http/http.service';
import { Option } from '../../models/option/option';
import { Subscription } from 'rxjs/Subscription';
import { User } from '../../models/user/user';
import { ChartOptions } from './models/chart-options/chart-options';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit, OnDestroy {
  private isPolling: boolean;
  private subscription: Subscription;
  private channel: string;
  private options: Array<Option>;
  private voters: Array<User>;
  private horizontalChart: ChartOptions;
  private pieChart: ChartOptions;
  private chat: any = [];

  constructor(
    private activateRoute: ActivatedRoute,
    private httpService: HttpService,
    public sanitizer: DomSanitizer,
  ) {
    this.isPolling = false;

    this.pieChart = new ChartOptions({
      showLabels: true,
      showLegend: true,
    });

    this.horizontalChart = new ChartOptions({
      showXAxis: true,
      showYAxis: true,
      gradient: false,
      showLegend: true,
      showXAxisLabel: true,
      xAxisLabel: '',
      showYAxisLabel: true,
      yAxisLabel: '',
    });

    this.voters = [];
    this.options = [];
  }

  public ngOnInit(): void {
    this.subscription = this.activateRoute.params.subscribe((params) => {
      this.channel = params['channel'];
      this.handleMessage();
    });
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public addOption(): void {
    this.options.push({ name: '', value: 0, voters: [] });
    this.options = [...this.options];
  }

  public removeOption(index: number): void {
    this.options.splice(index, 1);
    this.options = [...this.options];
  }

  public startPolling(): void {
    if (!this.isPolling) {
      this.isPolling = true;
      this.logMessage('Poll is started...');
    }
    
  }

  public stopPolling(): void {
    if (this.isPolling) {
      this.isPolling = false;
      this.logMessage('Poll is stopped...'); 
    }
  }

  public resetData(): void {
    this.voters = [];
    this.options.forEach((option) => {
      option.value = 0;
      option.voters = [];
    });
    this.logMessage('Results reseted.');
  }

  private vote(user, name: string): void {
    let optionIndex = this.options.map((option) => { return option.name }).indexOf(name);
    if (optionIndex !== -1 && this.isPolling) {
      let voter = {
        username: user.username,
        id: user['user-id'],
        option: name
      }
      this.voters.push(voter);
      this.options[optionIndex].voters.push(voter);
      this.options[optionIndex].value = this.options[optionIndex].voters.length;
      this.options = [...this.options];
    }
  }

  private connectChat(callback): Promise<any> {
    return new Promise<any>((resolve) => {
      this.logMessage('Connected to ' + this.channel + '!');
      this.httpService.connectChat(this.channel, (channel, user, message, self) => {
        let data = { channel: channel, user: user, message: message, self: self };
        callback(data);
      });
    });
  }

  private handleMessage(): void {
    this.connectChat((data) => {
      this.chat.push({ username: data.user.username, message: data.message });
      let voterIndex = this.voters.map((voter) => { return voter.username }).indexOf(data.user.username);
      if (voterIndex === -1) {
        this.vote(data.user, data.message);
      }
    });
  }

  private randomVote(): void {
    setInterval(() => {
      let rand = Math.random() * (this.options.length - 0.5)
      rand = Math.round(rand);
      this.options[rand].value++;
      this.options = [...this.options];
    }, 500);
  }

  private logMessage(message: string): void {
    this.chat.push({ username: 'TwitchVoting', message: message });
  }

}
