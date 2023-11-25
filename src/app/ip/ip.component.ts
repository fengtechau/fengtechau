import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ip',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ip.component.html',
  styleUrl: './ip.component.scss',
})
export class IpComponent implements OnInit {
  ip: string = '';
  ipDetails: any;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get('https://api.ipify.org?format=json')
      .subscribe((data: any) => {
        this.ip = data.ip;
        this.http
          .get(`https://ipapi.co/${this.ip}/json/`)
          .subscribe((details: any) => {
            this.ipDetails = details;
          });
      });
  }
}
