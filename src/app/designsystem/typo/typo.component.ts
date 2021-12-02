import { Component, OnInit } from '@angular/core';
import { TokensService } from '../tokens.service';

@Component({
  selector: 'stb-typo',
  templateUrl: './typo.component.html',
  styleUrls: ['./typo.component.scss']
})
export class TypoComponent implements OnInit {
  tokens!: any;
  families: any[];
  familyKeys!: string[];
  familyHues!: any;

  constructor(private tokensService: TokensService) {
    this.families = [];
  }

  ngOnInit(): void {
    this.tokensService.getTokens().subscribe(
      {
        next: (next: any) => {
          this.tokens = next;
          this.getFamilyTokens();
        }
      }
    )
  }

  getFamilyTokens() {
    this.familyKeys = Object.keys(this.tokens.font.family);
    this.familyKeys.map(key => {
      this.families.push(this.tokens.font.family[key]);
    })
    console.log(this.families)
  }

  getFamilyProperty(family: any) {
    return `var(--${ family.name })`
  }
}
