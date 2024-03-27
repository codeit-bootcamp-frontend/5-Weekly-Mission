// Main.js
import Cards from './Cards';
import Article from './Article';
import '../style.css';
import search_icon from '../public/Search.svg';

function Main() {
    return (
        <main>
            <Article />
            <section>
                <div className="search_div">
                    <img src={search_icon} width="15" height="15" alt="search_icon" />
                    <input className="search_input" placeholder="링크를 검색해보세요" />
                </div>
                <Cards />
            </section>
        </main>
    );
}

export default Main;
