import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { PuzzleGame } from "@/components/puzzle-game";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-4 bg-white/80 backdrop-blur-sm border-b border-emerald-200">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
            <span className="text-white text-lg">🐾</span>
          </div>
          <h1 className="text-xl font-bold text-emerald-800">Fluffy Friends Puzzle</h1>
        </div>
        <div className="flex items-center space-x-6">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">Play Now</Button>
          <a href="#puzzles" className="text-emerald-700 hover:text-emerald-900">Browse Puzzles</a>
          <a href="#about" className="text-emerald-700 hover:text-emerald-900">About</a>
          <div className="flex items-center space-x-1">
            <span className="text-emerald-700">🌏</span>
            <span className="text-sm text-emerald-700">English</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="text-center py-12 px-4">
        <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full mb-6">
          <span className="mr-2">✨</span>
          <span className="font-medium">v2.0 Update | 新しい森の仲間が登場！</span>
        </div>

        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Fluffy Friends Puzzle
        </h1>
        <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
          可愛い森の動物たちをパズルで組み立てよう！
        </p>
        <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
          記憶力を使って森の仲間たちを完成させる楽しいパズルアドベンチャー。新しく4匹の動物が仲間入り：
          リス、うさぎ、ハリネズミ、フクロウ！全年齢対象の癒し系ゲームです。
        </p>

        <div className="text-orange-600 mb-8">
          リス • うさぎ • ハリネズミ • フクロウ
        </div>

        <div className="flex justify-center space-x-4 mb-12">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3">
            🎮 インタラクティブゲーム
          </Button>
          <Button variant="outline" className="border-orange-500 text-orange-600 hover:bg-orange-50 px-6 py-3">
            🏆 アチーブメント
          </Button>
          <Button variant="outline" className="border-orange-500 text-orange-600 hover:bg-orange-50 px-6 py-3">
            ⚡ クイック＆ファン
          </Button>
        </div>

        {/* Game Area */}
        <div className="max-w-4xl mx-auto mb-12">
          <PuzzleGame />
        </div>

        {/* Share Section */}
        <div className="mb-12">
          <p className="text-gray-600 mb-4">🌟 あなたのゲームをシェアしよう：</p>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" size="sm">📱 X</Button>
            <Button variant="outline" size="sm">📘 Facebook</Button>
            <Button variant="outline" size="sm">💬 WhatsApp</Button>
            <Button variant="outline" size="sm">📸 Instagram</Button>
            <Button variant="outline" size="sm">🔗 Reddit</Button>
            <Button variant="outline" size="sm">📋 Copy</Button>
          </div>
        </div>
      </div>

      {/* Featured Puzzle Collection */}
      <div className="max-w-6xl mx-auto px-4 py-12" id="puzzles">
        <h2 className="text-3xl font-bold text-center mb-4">おすすめパズルコレクション</h2>
        <p className="text-center text-gray-600 mb-12">人気の森の仲間たちのパズルを厳選してお届け</p>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-pink-50 border-pink-200">
            <CardHeader>
              <div className="w-full h-48 bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-6xl">🦌🐰🦔</span>
              </div>
              <div className="flex gap-2 mb-2">
                <Badge className="bg-orange-500 text-white">Amazon ベストセラー</Badge>
                <Badge variant="outline">ST認証済み</Badge>
              </div>
              <CardTitle>フォレストフレンズ ピクチャーパズル 36ピース</CardTitle>
              <CardDescription>
                愛らしい森の動物たちが描かれた36ピースパズル。4歳以上のお子様に最適で、パズルマット付き
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                <span className="flex items-center gap-1">
                  🧩 36ピース
                </span>
                <span className="flex items-center gap-1">
                  👶 4歳以上
                </span>
              </div>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• パズルマット付属</li>
                <li>• ST安全基準認証</li>
                <li>• お子様に安全</li>
              </ul>
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                🛒 Amazonで見る
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-6xl">🦉✨</span>
              </div>
              <div className="flex gap-2 mb-2">
                <Badge className="bg-blue-500 text-white">クリスタルパズル</Badge>
                <Badge variant="outline">日本製</Badge>
              </div>
              <CardTitle>フクロウフレンズ クリスタルパズル 18ピース</CardTitle>
              <CardDescription>
                美しいクリスタル素材で作られた立体パズル。森のフクロウをモチーフにした芸術的な作品
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                <span className="flex items-center gap-1">
                  💎 18ピース
                </span>
                <span className="flex items-center gap-1">
                  👦 6歳以上
                </span>
              </div>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• 3Dクリスタル構造</li>
                <li>• 高品質素材</li>
                <li>• コレクターアイテム</li>
                <li>• 送料無料・返品可能</li>
              </ul>
              <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                🛍️ eBayで見る
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-4xl mx-auto px-4 py-12" id="about">
        <h2 className="text-3xl font-bold text-center mb-8">フラッフィーフレンズパズルゲームについて</h2>

        <div className="space-y-6 text-gray-700">
          <p>
            フラッフィーフレンズパズルは、可愛らしさと脳トレが融合した、満足感あふれるブラウザゲームです。
            目標はシンプルで楽しい：見えないスペースで森の仲間たちのパーツを組み立てることです。
            記憶力を信じて、タップやクリックで各パーツを配置し、絵が完成していく様子をお楽しみください。
          </p>

          <p>
            <strong>**v2.0の新機能**</strong>：愛らしい4匹の新しい森の仲間をパズルコレクションに追加しました！
            今度は<strong>リス</strong>（木登り名人）、<strong>うさぎ</strong>（跳び跳ね専門）、<strong>ハリネズミ</strong>（とげとげボール）、
            そして<strong>フクロウ</strong>（森の賢者）を組み立てることができます。それぞれのキャラクターが独自の魅力とパズルチャレンジをもたらします。
          </p>

          <p>
            セッションは短時間で居心地が良く、授業の合間、通勤時間、夜更かしのスクロール時間にぴったりです。
            ウェブ用に設計されたフラッフィーフレンズパズルは、モバイルとデスクトップでスムーズに動作します。
            ダウンロード不要、アカウント不要、ただプレイするだけ。完成したら、あなたの森の仲間たちの絵をシェアして、
            静かなパズルの天才ぶりをアピールしましょう。
          </p>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-8">
          <div className="flex items-start space-x-2">
            <span className="text-yellow-600">⚠️</span>
            <div>
              <h3 className="font-medium text-yellow-800">重要なお知らせ</h3>
              <p className="text-yellow-700 text-sm mt-1">
                すべての森の仲間たちのアセットはFluffyStudio創作です！これは非公式のファンプロジェクトで、
                他の権利者とは関係ありません。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How to Play */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">🎮 フラッフィーフレンズパズルの遊び方</h2>

        <div className="space-y-4">
          {[
            "スタートボタンを押してゲームを開始し、パズルセッションを始めます",
            "見えないパズルスペースに森の仲間のパーツをクリックまたはタップで配置します",
            "ピースが見えないので、記憶力と空間認識力を使いましょう",
            "組み立てられていく様子を見て、次の配置を調整します",
            "愛らしい森の仲間の絵が徐々に完成していく様子を見守ります",
            "森の仲間を完成させて、素晴らしい完成品をシェアします",
            "各回でより速く完成できるように自分にチャレンジします",
            "すべてのピースが完璧に収まる満足の瞬間を楽しみます"
          ].map((step, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                {index + 1}
              </div>
              <p className="text-gray-700 pt-1">{step}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Game Features */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">フラッフィーフレンズパズルゲームの特徴</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 text-xl">🧠</span>
              </div>
              <CardTitle>記憶ベースゲームプレイ</CardTitle>
              <CardDescription>
                配置中にピースが見えないユニークなパズルメカニズム
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-pink-600 text-xl">🦔</span>
              </div>
              <CardTitle>愛らしい森のアート</CardTitle>
              <CardDescription>
                パズルを完成させると現れる美しいキャラクターアートワーク
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-xl">📱</span>
              </div>
              <CardTitle>モバイルフレンドリーHTML5</CardTitle>
              <CardDescription>
                モバイルとデスクトップブラウザの両方でスムーズにプレイ
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-xl">⏱️</span>
              </div>
              <CardTitle>クイックセッション</CardTitle>
              <CardDescription>
                短い休憩時間にぴったりな一口サイズのゲームプレイ
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 text-xl">🎁</span>
              </div>
              <CardTitle>ダウンロード不要</CardTitle>
              <CardDescription>
                ブラウザですぐにプレイ、インストール不要
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-yellow-600 text-xl">🌟</span>
              </div>
              <CardTitle>リラックス体験</CardTitle>
              <CardDescription>
                瞑想的でほぼ禅のようなゲーム体験
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">フラッフィーフレンズパズルゲームのFAQ</h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">フラッフィーフレンズパズルは公式ですか？</h3>
            <p className="text-gray-700">
              いいえ。フラッフィーフレンズパズルはファンゲームです。森の仲間たちと関連キャラクターはFluffyStudioによって作成されました。
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">スマートフォンで動作しますか？</h3>
            <p className="text-gray-700">
              はい。モバイルウェブブラウザと互換性があり、モバイルとデスクトップの両方でスムーズにプレイできます。
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">料金はいくらですか？</h3>
            <p className="text-gray-700">
              ブラウザで完全に無料でプレイできます。ダウンロードやアカウント登録は一切不要です！
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">完成までにどのくらい時間がかかりますか？</h3>
            <p className="text-gray-700">
              セッションは一口サイズで、わずか数分で終了できます - 短い休憩にぴったりです！
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">パズルにはどんな森の仲間が登場しますか？</h3>
            <p className="text-gray-700">
              はい！ゲームには森の宇宙から愛らしいリス、うさぎ、ハリネズミ、フクロウのキャラクターが含まれており、
              それらを可愛いパズルに組み立てることができます。
            </p>
          </div>
        </div>
      </div>

      {/* Puzzle Tips */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">⭐ パズル攻略のコツ</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            "ピースを配置する際は空間記憶と直感を信頼しましょう",
            "各パーツがどこに行くべきかの心のイメージから始めましょう",
            "ピースが正しく配置されたときのフィードバックに注意を払いましょう",
            "時間をかけて - このリラックスできるパズル体験に急ぐ必要はありません",
            "定期的に練習して空間認識スキルを向上させましょう",
            "完成した森の仲間たちの美しさを楽しみましょう"
          ].map((tip, index) => (
            <div key={index} className="flex items-start space-x-3">
              <span className="text-orange-500 mt-1">🌟</span>
              <p className="text-gray-700">{tip}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-emerald-800 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="mb-4">❤️ 森の仲間ファンによる世界中のファンのための作品</p>
          <div className="flex justify-center space-x-6 mb-4">
            <a href="#about" className="hover:text-emerald-200">About</a>
            <a href="#privacy" className="hover:text-emerald-200">Privacy</a>
            <a href="#terms" className="hover:text-emerald-200">Terms</a>
            <a href="mailto:info@fluffyfriendspuzzle.app" className="hover:text-emerald-200">Contact</a>
          </div>
          <p className="text-sm text-emerald-200">
            All rights reserved. 森の仲間キャラクターはそれぞれの所有者の財産です。
          </p>
        </div>
      </footer>
    </div>
  );
}
