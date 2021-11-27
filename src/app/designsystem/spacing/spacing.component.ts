import { Component, OnInit } from '@angular/core';
import { TokensService } from '../tokens.service';

@Component({
  selector: 'stb-spacing',
  templateUrl: './spacing.component.html',
  styleUrls: ['./spacing.component.scss']
})
export class SpacingComponent implements OnInit {
  tokens!: any;
  spacings: any[];
  spacingKeys!: string[];
  spacingHues!: any;

  constructor(private tokensService: TokensService) {
    this.spacings = [];
  }

  ngOnInit(): void {
    this.tokensService.getTokens().subscribe(
      {
        next: next => {
          this.tokens = next;
          this.getSpacingTokens();
        }
      }
    )
  }

  getSpacingTokens() {
    this.spacingKeys = Object.keys(this.tokens.spacing);
    this.spacingKeys.map(key => {
      this.spacings.push(this.tokens.spacing[key]);
    })
  }

  getSpacingProperty(spacing: any) {
    return `var(--${ spacing.name })`
  }
}
