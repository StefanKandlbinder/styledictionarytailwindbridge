import { Component, OnInit } from '@angular/core';
import { TokensService } from '../tokens.service';

@Component({
  selector: 'stb-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss']
})
export class ColorsComponent implements OnInit {
  tokens!: any;
  colors: any[];
  colorKeys!: string[];
  colorHues!: any;
  colorValue: any;

  constructor(private tokensService: TokensService) {
    this.colors = [];
  }

  ngOnInit(): void {
    this.tokensService.getTokens().subscribe(
      {
        next: next => {
          this.tokens = next;
          this.getColorTokens();
        }
      }
    )
  }

  getColorTokens() {
    let colors: any[] = [];
    this.colorKeys = Object.keys(this.tokens.color);
    this.colorKeys.map(key => {
      let colorHues = Object.entries(this.tokens.color[key]);
      // let color = {[key]: []};
      let hues: Object[] = [];

      colorHues.map(hue => {
        let tmpKey = hue[0];
        let tmpHue = hue[1] as Object;
        hues.push(tmpHue);
      })
      // Object.assign(color[key], hues);
      colors.push(hues);
      // this.colors.push(colorValue);
    })

    this.colors = colors;
  }

  getHueValues() {
    let hues: any[] = this.colors[0];
    return hues;
  }
}
