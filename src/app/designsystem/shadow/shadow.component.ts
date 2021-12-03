import { Component, OnInit } from '@angular/core';
import { TokensService } from '../tokens.service';

@Component({
  selector: 'stw-shadow',
  templateUrl: './shadow.component.html',
  styleUrls: ['./shadow.component.scss']
})
export class ShadowComponent implements OnInit {
  tokens!: any;
  shadows: any[];
  shadowKeys!: string[];
  shadowHues!: any;

  constructor(private tokensService: TokensService) {
    this.shadows = [];
  }

  ngOnInit(): void {
    this.tokensService.getTokens().subscribe(
      {
        next: next => {
          this.tokens = next;
          this.getShadowTokens();
        }
      }
    )
  }

  getShadowTokens() {
    this.shadowKeys = Object.keys(this.tokens.shadow);
    this.shadowKeys.map(key => {
      this.shadows.push(this.tokens.shadow[key]);
    })
  }

  getShadowProperty(spacing: any) {
    return `var(--${ spacing.name })`
  }

}
