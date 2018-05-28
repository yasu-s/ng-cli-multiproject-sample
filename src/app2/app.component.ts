import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {

// #region fields

    /** タイトル */
    title = 'app';

    /** クリック回数 */
    cnt: number = 0;

// #endregion

// #region methods

    /**
     * クリックイベント
     */
    onClick(): void {
        this.cnt++;
    }

// #endregion

}
