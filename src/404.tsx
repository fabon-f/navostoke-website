export const url = "/404.html";

export const title = "ページが存在しません";

export default () => <main className="notfound">
    <figure className="illust">
        <picture>
                <source srcSet="/img/net.webp" width={772} height={435} type="image/webp" />
                <source srcSet="/img/net.jpg" width="250" type="image/jpg" />
                <img src="/img/net.jpg" alt="НЕТ!" width="250" />
            </picture>
        <figcaption>Говорков, Виктор Иванович<br /><cite>«Нет!»</cite> (1954)</figcaption>
    </figure>

    <div className="text">
        <h1>404 Not Found</h1>
        <h2>ページが存在しません。</h2>
        <p>Страница не найдена. Кажется что-то пошло не так.</p>
        <ul className="links">
            <li><a href="/">トップページへ</a></li>
            <li><a href="/works/">作品一覧</a></li>
        </ul>
    </div>
</main>;
