import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
declare var tmi: any;

@Injectable()
export class HttpService {
  private client: any;

  constructor(private http: Http) {
    
  }

  public connectChat(channel: string, callback): void {
    this.client = new tmi.client({
      identity: {
        username: "yoursgk",
        password: "oauth:zaaea6p4thwi0imqb7juuqm7c5nfj6"
      },
      channels: ["#" + channel]
    });

    this.client.addListener('message', callback);
    this.client.connect();
  }
}
