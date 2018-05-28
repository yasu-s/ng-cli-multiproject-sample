# Angular CLI サンプル

## npmスクリプト一覧

<table>
<tr>
  <th>スクリプト</th>
  <th>概要</th>
</tr>
<tr>
  <td>start</td>
  <td>
    ソースコードをビルド・サーバー実行します。<br>
    引数にプロジェクト名を入力することで、各プロジェクトのビルドが可能です。<br>
    <code>npm start -- app1</code><br>
    <code>npm start -- app2</code>
  </td>
</tr>
<tr>
  <td>build</td>
  <td>
    ソースコードをビルドします。<br>
    引数にプロジェクト名を入力することで、各プロジェクトのビルドが可能です。<br>
    <code>npm run build -- app1</code><br>
    <code>npm run build -- app2</code>
  </td>
</tr>
<tr>
  <td>test</td>
  <td>単体テストを実行します。</td>
</tr>
<tr>
  <td>test:headless</td>
  <td>
    単体テストを実行します。(CI用)<br>  
    JUnit形式のテスト結果ファイルを ./reports/test-results.xml に出力します。<br>  
    コードカバレッジについても ./reports/coverage ディレクトリに出力します。  
  </td>
</tr>
<tr>
  <td>lint</td>
  <td>TSLintを実行します。</td>
</tr>
<tr>
  <td>lint:output</td>
  <td>
    TSLintを実行します。(CI用)<br>   
    TSLintの結果を ./reports/tslint-result.json に出力します。
  </td>
</tr>
</table>