import React, { useState } from 'react';
import Button from './Button';

function AdviceCard(props) {
    const [newAdvice, setNewAdvice] = useState(''); // Local state for new advice input
    const handleShare = () => {
        const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://react-quote-zt12.vercel.app/')}`;
        window.open(facebookShareUrl, '_blank');
    };
    return (
        <div className="card">
            <div className="card-bottom">
                <h3 className="card-heading">Lời Khuyên Ngẫu Nhiên</h3>
                <p className="card-description">{props.advice}</p>
                <hr />
                <input
                    type="text"
                    placeholder="Thêm lời khuyên của bạn"
                    value={newAdvice}
                    onChange={(e) => setNewAdvice(e.target.value)}
                    className="input-advice"
                />
                <Button
                    onClick={() => {
                        props.addNewAdvice(newAdvice);
                        setNewAdvice('');
                    }}
                    iconClass="fas fa-plus"
                />
                <div className="button-container">
                    <Button onClick={props.fetchRandomAdvice} iconClass="fas fa-dice" />
                    <Button onClick={props.saveFavorite} iconClass="fas fa-heart" />
                    <Button onClick={handleShare} iconClass="fas fa-share" />
                    <Button onClick={props.goToFavorites} iconClass="fas fa-list" />
                </div>
            </div>
        </div>
    );
}

export default AdviceCard;
