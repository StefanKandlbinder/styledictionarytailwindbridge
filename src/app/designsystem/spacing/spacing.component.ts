import { Component, OnInit } from '@angular/core';
import { TokensService } from '../tokens.service';
import { TypoService } from '../typo/typo.service';

@Component({
  selector: 'stw-spacing',
  templateUrl: './spacing.component.html',
  styleUrls: ['./spacing.component.scss']
})
export class SpacingComponent implements OnInit {
  tokens!: any;
  spacings: any[];
  spacingKeys!: string[];
  spacingHues!: any;

  constructor(private tokensService: TokensService, private typoService:TypoService) {
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

  getPixelValue(rem:string) {
    return this.typoService.getPixelfromRem(rem);
  }

  getSpacingProperty(spacing: any) {
    return `var(--${ spacing.name })`
  }
}
