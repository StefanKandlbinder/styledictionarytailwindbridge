import { Component, OnInit } from '@angular/core';
import { TokensService } from '../tokens.service';

@Component({
  selector: 'stb-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss']
})
export class ColorsComponent implements OnInit {
  tokens!: any;
  colors!: {};
  colorKeys!: string[];
  colorHues!: any;
  // colorValue: any;

  constructor(private tokensService: TokensService) {
  }

  ngOnInit(): void {
    this.tokensService.getTokens().subscribe(
      { next: next => {
          this.tokens = next;
          this.getColorTokens();
        }
      }
    )
  }

  getColorTokens() {
    this.colors = Object.entries(this.tokens.color);
    /* for (const [key, value] of Object.entries(this.tokens.color)) {
      console.log(`${key}: ${value}`);
    } */
    this.colorKeys = Object.keys(this.tokens.color);
    this.colorHues = Object.entries(this.tokens.color.red);
    // this.colorValue = Object.values(this.tokens.color.red.toString(500).value);

    console.log(this.colorKeys, this.colorHues);
  }
}
