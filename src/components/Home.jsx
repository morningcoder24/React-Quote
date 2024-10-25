import React, { useState, useEffect } from 'react';
import AdviceCard from './AdviceCard';
import { useNavigate } from 'react-router-dom';

function Home() {
    const [advice, setAdvice] = useState('');
    const [favoriteAdvice, setFavoriteAdvice] = useState([]);
    const navigate = useNavigate();

    const arrayAdvice = [
        "Hãy bắt đầu từ những điều nhỏ nhất.",
        "Thất bại là mẹ thành công.",
        "Luôn luôn học hỏi từ người khác.",
        "Kiên nhẫn là chìa khóa của thành công.",
        "Thành công không đến từ sự may mắn mà là từ sự nỗ lực.",
        "Mỗi ngày là một cơ hội để trở nên tốt hơn.",
        "Hãy tin vào chính mình và không bao giờ bỏ cuộc.",
        "Chỉ cần một bước tiến nhỏ mỗi ngày sẽ tạo nên sự khác biệt lớn.",
        "Không có gì là không thể khi bạn đặt tâm vào việc đó.",
        "Biến thử thách thành cơ hội để phát triển.",
        "Đừng sợ thất bại, hãy sợ không cố gắng.",
        "Học hỏi từ sai lầm để tiến về phía trước."
    ];

    useEffect(() => {
        //tao local favorite
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavoriteAdvice(storedFavorites);
        // tao local advice
        const storedAdvice = JSON.parse(localStorage.getItem('adviceList')) || [];
        //them loikhuyen
        localStorage.setItem('adviceList', JSON.stringify(arrayAdvice));
        setAdvice(getRandomAdvice(arrayAdvice));

    }, []);

    //ham random
    const getRandomAdvice = (adviceList) => {
        return adviceList[Math.floor(Math.random() * adviceList.length)];
    };

    // chon ngau nhien loi khuyen trong local
    const fetchRandomAdvice = () => {
        const storedAdvice = JSON.parse(localStorage.getItem('adviceList')) || [];
        setAdvice(getRandomAdvice(storedAdvice));
    };

    //luu favorite vao localstorage
    const saveFavorite = () => {
        //neu favo bi trung thi khong them
        if (!favoriteAdvice.includes(advice)) {
            const updatedFavorites = [...favoriteAdvice, advice];
            setFavoriteAdvice(updatedFavorites);
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        }
    };

    // them loi khuyen moi vao local
    const addNewAdvice = (newAdvice) => {
        const storedAdvice = JSON.parse(localStorage.getItem('adviceList')) || [];
        if (!storedAdvice.includes(newAdvice)) {
            const updatedAdviceList = [...storedAdvice, newAdvice];
            localStorage.setItem('adviceList', JSON.stringify(updatedAdviceList));
            setAdvice(getRandomAdvice(updatedAdviceList));
        } else {
            console.log("da ton tai");
        }
    };

    const goToFavorites = () => {
        navigate('/favorites');
    };

    return (
        <div>
            <AdviceCard
                advice={advice}
                fetchRandomAdvice={fetchRandomAdvice}
                saveFavorite={saveFavorite}
                goToFavorites={goToFavorites}
                addNewAdvice={addNewAdvice}
            />
        </div>
    );
}

export default Home;
