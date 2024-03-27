// Article.js
import { useFetch } from './hooks/useFetch';
import '../style.css';

function Article() {
    const folderData = useFetch('https://bootcamp-api.codeit.kr/api/sample/folder');

    return (
        <div className="folder_info_container">
            {folderData && (
                <div className="folder_info">
                    <img
                        src={folderData.folder.owner.profileImageSource}
                        alt="프로필"
                        width={60}
                        height={60}
                    />
                    <span className="owner_name">{folderData.folder.owner.name}</span>
                    <h1 className="folder_name">{folderData.folder.name}</h1>
                </div>
            )}
        </div>
    );
}

export default Article;
