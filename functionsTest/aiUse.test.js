// test/index.test.js
import {expect} from 'chai';
import {callPython} from '../functions/aiUse.js'; // 関数をインポート

describe('callPython function', () => {
    it('should return a default message when called', () => {
        const prompt = 'これはテスト用のプロンプトです';
        const result = callPython(prompt);
      expect(result).to.equal('まだ回答は返せません。もう少し待ってね'); // デフォルトメッセージを確認
    });
});