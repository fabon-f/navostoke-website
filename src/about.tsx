import { ExternalLink, WebpImage } from "../lib/components.tsx";
import { Data } from "./types.ts";

export const title = "このサークルについて";
export const description = "サークル「ナヴァストーケ」の説明";

export default (data: Data) =>
    <main role="main">
        <h1>このサークルについて</h1>

        <p>「ナヴァストーケ」は、2021年10月に活動を開始した<ExternalLink href="https://www.fabon.info">ふぁぼん</ExternalLink>の個人サークルです。主に評論・情報系の同人誌を出しますが、一次・二次問わず物語を作ることもあります。</p>
        <p>科学、コンピュータ、ロシア語、ロシア・旧ソ連、公共交通など、幅広い分野に対する知識・愛・こだわりを掛け算した作品を主に作っています。また、専門知識・能力をフル活用して解像度の高い作品を作ることを活動目標の1つに据えています。</p>

        <section>
            <h2>名前の由来</h2>
            <p>サークル名の「ナヴァストーケ」は、ロシア語で「東で」を意味する「на востоке」を発音準拠で日本語に転写したものです。</p>
            <p>このフレーズは突然思いついたものではなく、ウズベキスタン出身の超有名音楽グループ「ヤッラ」の代表曲「チャイハナ」のサビから引用しました。</p>
            <blockquote>
                <p>東では 東では<br/>月のない空なんてありえない<br/>東では 東では<br/>チャイハナのない人生なんてありえない</p>
            </blockquote>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/kJLFBrcZFPc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </section>

        <section id="special_thanks">
            <h2>Special Thanks</h2>
            <h3>ロゴデザイン: <ExternalLink href="https://awomomiji.tumblr.com">あをもみじ</ExternalLink> さん(サークル「青葉小路」)</h3>
            <div className="logo_gallery">
                <figure>
                    <WebpImage src="/img/logo" width="257" height="145" alt="ナヴァストーケのアイコン(通常)" className="background-white" />
                    <figcaption>通常ロゴ</figcaption>
                </figure>
                <figure>
                    <WebpImage src="/img/logo_dark_saturated" width="257" height="145" alt="ナヴァストーケのアイコン(ダークテーマ)" className="background-dark" />
                    <figcaption>ロゴ(ダークテーマ)</figcaption>
                </figure>
            </div>
            <p>私の興味の広さ故に、私の個人サークル「ナヴァストーケ」は必然的にさまざまな内容を扱うことになります。これは設立の瞬間から分かっていたことでした。ロゴの使われるジャンルが広い上に、ロゴに使えそうな具体的要素もバラバラ——デザイナー側からすれば相当な無茶振りだったと思うのですが、私が好きなロシア・ソ連と鉄道・船のエッセンスをきれいにまとめていただきました。</p>
            <h4>ロゴタイプ</h4>
            <p>ソ連やロシアの国旗から赤色と青色を選び、私も好きなソ連のデザインのようなレトロさと力強さを出しつつ、どのジャンルにも使えるすっきりとした文字にしてもらいました。欧文書体はモダニズムを元に作られたFuturaだそうです。</p>
            <h4>ロゴマーク</h4>
            <p>グラデーションと幾何学的図形を組み合わせたデザインは、1930年代ヨーロッパのカッサンドル「ノルマンディー号」に代表されるポスターデザインから着想を得たそうです。</p>
            <p>востокつまり東は日が昇る方角ということで、赤と青のグラデーションで表現された「徐々に明るくなる夜明けの東の空」、2方向の白い線で表現された「闇を切り裂いて進路を照らす鉄道・船・灯台のライト」、この2つの要素が盛り込まれています。今にもハイスクール・フリートOPのHigh Free Spiritsが流れてきそうな——私は「はいふり」の大ファンです——、希望あふれるロゴをデザインしていただきました。</p>

            <blockquote>
                <p>静かに燃える世界　始まりはここから　夜空が終わりを告げるとき<br/>ひとすじの光が　胸に秘めた声が　解き放つ　闇を裂いて</p>
            </blockquote>
        </section>
    </main>;
