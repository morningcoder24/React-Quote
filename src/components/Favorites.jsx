// components/Favorites.js
import React, { useState, useEffect } from 'react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

function Favorites() {
    const [searchTerm, setSearchTerm] = useState('');
    const [favoriteAdvice, setFavoriteAdvice] = useState([]);
    const navigate = useNavigate();

    // Cập nhật danh sách yêu thích từ localStorage khi component được gắn
    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavoriteAdvice(storedFavorites);
    }, []);

    // Xóa lời khuyên yêu thích
    const handleDelete = (advice) => {
        const updatedFavorites = favoriteAdvice.filter(item => item !== advice);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        setFavoriteAdvice(updatedFavorites); // Cập nhật state
    };

    // Lọc lời khuyên yêu thích theo từ khóa tìm kiếm
    const SearchAdvice = favoriteAdvice.filter(item =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Render danh sách lời khuyên yêu thích
    const renderFavorites = () => (
        <ul>
            {SearchAdvice.map((item, index) => (
                <li key={index}>
                    {item}
                    <button className="button-favo" onClick={() => handleDelete(item)}>Xóa</button>
                </li>
            ))
            }
        </ul >
    );
    const goToHome = () => {
        navigate('/');
    };

    return (
        <>
            <div className='card-favo card-bottom'>
                <h2 className=''>Danh sách yêu thích</h2>
                <input
                    type="text"
                    placeholder="Tìm kiếm lời khuyên..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <hr />
                {renderFavorites()}
                <div className="button-container">
                    <Button onClick={goToHome} iconClass="fas fa-share" />
                </div>
            </div>
        </>
    );
}

export default Favorites;
