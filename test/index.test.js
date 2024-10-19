// test/index.test.js
import {expect} from 'chai';
import {add, getCurrentDate, callPython} from '../routes/index.js'; // 関数をインポート

describe('add function', () => {
  it('should return 4 when adding 1 and 3', () => {
    const result = add(1, 3);
    expect(result).to.equal(4); // 結果が4であることを確認
  });

  it('should return 0 when adding -1 and 1', () => {
    const result = add(-1, 1);
    expect(result).to.equal(0); // 結果が0であることを確認
  });
});

describe('getCurrentDate function', () => {
  it('should return a date string in the format YYYY/MM/DD', () => {
    const result = getCurrentDate();
    expect(result).to.match(/\d{4}\/\d{1,2}\/\d{1,2}/); // 日付のフォーマットが正しいか確認
  });
});

describe('callPython function', () => {
  it('should return a default message when called', () => {
    const prompt = 'これはテスト用のプロンプトです';
    const result = callPython(prompt);
    expect(result).to.equal('まだ回答は返せません。もう少し待ってね'); // デフォルトメッセージを確認
  });

  it('should simulate calling an API and return a mocked response', () => {
    const prompt = 'これは別のテスト用プロンプトです';
    const mockResponse = 'これはテスト用のAI回答です';

    // モックの実装を設定
    callPython.mockImplementation(() => mockResponse);

    // 関数を呼び出して結果を確認
    const result = callPython(prompt);
    expect(result).to.equal(mockResponse);
  });
});