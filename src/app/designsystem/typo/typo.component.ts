import { Component, OnInit } from '@angular/core';
import { TokensService } from '../tokens.service';
import { TypoService } from './typo.service';

@Component({
  selector: 'stw-typo',
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
  sizes: any[];
  sizeKeys!: string[];
  sizeHues!: any;

  constructor(private tokensService: TokensService, private typoService: TypoService) {
    this.families = [];
    this.weights = [];
    this.sizes = [];
  }

  ngOnInit(): void {
    this.tokensService.getTokens().subscribe(
      {
        next: (next: any) => {
          this.tokens = next;
          this.getFamilyTokens();
          this.getWeightTokens();
          this.getSizeTokens();
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

  getSizeTokens() {
    this.sizeKeys = Object.keys(this.tokens.font.size);
    this.sizeKeys.map(key => {
      this.sizes.push(this.tokens.font.size[key]);
    })
  }

  getPixelValue(rem:string) {
    return this.typoService.getPixelfromRem(rem);
  }

  getFamilyProperty(family: any) {
    return `var(--${ family.name })`
  }

  getWeightProperty(weight: any) {
    return `var(--${ weight.name })`
  }

  getSizeProperty(size: any) {
    return `var(--${ size.name })`
  }
}
