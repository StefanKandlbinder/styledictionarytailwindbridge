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
  weights: any[];
  weightKeys!: string[];
  weightHues!: any;

  constructor(private tokensService: TokensService) {
    this.families = [];
    this.weights = [];
  }

  ngOnInit(): void {
    this.tokensService.getTokens().subscribe(
      {
        next: (next: any) => {
          this.tokens = next;
          this.getFamilyTokens();
          this.getWeightTokens();
        }
      }
    )
  }

  getFamilyTokens() {
    this.familyKeys = Object.keys(this.tokens.font.family);
    this.familyKeys.map(key => {
      this.families.push(this.tokens.font.family[key]);
    })
  }

  getWeightTokens() {
    this.weightKeys = Object.keys(this.tokens.font.weight);
    this.weightKeys.map(key => {
      this.weights.push(this.tokens.font.weight[key]);
    })
  }

  getFamilyProperty(family: any) {
    return `var(--${ family.name })`
  }

  getWeightProperty(weight: any) {
    return `var(--${ weight.name })`
  }
}