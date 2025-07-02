class GitLearningApp {
    constructor() {
        this.currentCategory = null;
        this.currentCardIndex = 0;
        this.isFlipped = false;
        this.cards = [];
        this.originalCards = []; // 元のカードデータを保持
        this.userProgress = {
            difficult: [],
            okay: [],
            easy: []
        };
        
        this.initializeApp();
    }
    
    initializeApp() {
        this.bindEvents();
        this.showCategorySelection();
    }
    
    bindEvents() {
        // カテゴリ選択
        document.querySelectorAll('.category-card').forEach(card => {
            card.addEventListener('click', (e) => {
                const category = e.currentTarget.dataset.category;
                this.startLearning(category);
            });
        });
        
        // フラッシュカードのクリック
        document.getElementById('flashcard').addEventListener('click', () => {
            this.flipCard();
        });
        
        // ナビゲーションボタン
        document.getElementById('prev-card').addEventListener('click', () => {
            this.previousCard();
        });
        
        document.getElementById('next-card').addEventListener('click', () => {
            this.nextCard();
        });
        
        // 理解度ボタン
        document.getElementById('not-understood').addEventListener('click', () => {
            this.recordUnderstanding('difficult');
        });
        
        document.getElementById('somewhat-understood').addEventListener('click', () => {
            this.recordUnderstanding('okay');
        });
        
        document.getElementById('well-understood').addEventListener('click', () => {
            this.recordUnderstanding('easy');
        });
        
        // 戻るボタン
        document.getElementById('back-to-categories').addEventListener('click', () => {
            this.showCategorySelection();
        });
        
        const backToCategoriesResultBtn = document.getElementById('back-to-categories-result');
        if (backToCategoriesResultBtn) {
            backToCategoriesResultBtn.addEventListener('click', () => {
                this.showCategorySelection();
            });
        }
        
        // 完了画面のボタン - 要素存在確認付き + デバッグログ
        const restartBtn = document.getElementById('restart-category');
        if (restartBtn) {
            restartBtn.addEventListener('click', () => {
                console.log('Restart category clicked');
                this.restartCurrentCategory();
            });
        } else {
            console.warn('restart-category button not found');
        }
        
        const tryAnotherBtn = document.getElementById('try-another-category');
        if (tryAnotherBtn) {
            tryAnotherBtn.addEventListener('click', () => {
                console.log('Try another category clicked');
                this.showCategorySelection();
            });
        } else {
            console.warn('try-another-category button not found');
        }
        
        const reviewBtn = document.getElementById('review-difficult');
        if (reviewBtn) {
            reviewBtn.addEventListener('click', () => {
                console.log('Review difficult clicked');
                this.reviewDifficultCards();
            });
        } else {
            console.warn('review-difficult button not found');
        }
        
        // イベント委譲による追加のイベント処理
        document.addEventListener('click', (e) => {
            if (e.target.id === 'restart-category') {
                e.preventDefault();
                console.log('Event delegation: restart category');
                this.restartCurrentCategory();
            } else if (e.target.id === 'try-another-category') {
                e.preventDefault();
                console.log('Event delegation: try another category');
                this.showCategorySelection();
            } else if (e.target.id === 'review-difficult') {
                e.preventDefault();
                console.log('Event delegation: review difficult');
                this.reviewDifficultCards();
            }
        });
        
        // キーボードショートカット
        document.addEventListener('keydown', (e) => {
            if (this.getCurrentScreen() === 'learning-screen') {
                switch(e.key) {
                    case ' ':
                    case 'Enter':
                        e.preventDefault();
                        this.flipCard();
                        break;
                    case 'ArrowLeft':
                        e.preventDefault();
                        this.previousCard();
                        break;
                    case 'ArrowRight':
                        e.preventDefault();
                        this.nextCard();
                        break;
                    case '1':
                        e.preventDefault();
                        this.recordUnderstanding('difficult');
                        break;
                    case '2':
                        e.preventDefault();
                        this.recordUnderstanding('okay');
                        break;
                    case '3':
                        e.preventDefault();
                        this.recordUnderstanding('easy');
                        break;
                }
            }
        });
    }
    
    getCurrentScreen() {
        const screens = ['category-selection', 'learning-screen', 'completion-screen'];
        return screens.find(screen => !document.getElementById(screen).classList.contains('hidden'));
    }
    
    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.add('hidden');
        });
        document.getElementById(screenId).classList.remove('hidden');
    }
    
    showCategorySelection() {
        this.showScreen('category-selection');
        this.resetProgress();
    }
    
    startLearning(category) {
        this.currentCategory = category;
        this.originalCards = [...gitData[category].cards]; // 元データを保存
        this.cards = [...gitData[category].cards];
        this.currentCardIndex = 0;
        this.resetProgress();
        
        document.getElementById('category-title').textContent = gitData[category].title;
        this.showScreen('learning-screen');
        this.displayCard();
        this.updateProgress();
    }
    
    displayCard() {
        if (this.currentCardIndex >= this.cards.length) {
            this.showCompletion();
            return;
        }
        
        const card = this.cards[this.currentCardIndex];
        
        // フロント面
        document.getElementById('term-type').textContent = card.type;
        document.getElementById('term-name').textContent = card.term;
        
        // バック面
        document.getElementById('term-name-back').textContent = card.term;
        document.getElementById('definition').textContent = card.definition;
        document.getElementById('example').textContent = card.example;
        document.getElementById('practical-tip').textContent = card.practicalTip;
        
        // カードを表面に戻す
        this.resetCard();
        this.updateNavigationButtons();
        this.updateProgress();
    }
    
    flipCard() {
        const flashcard = document.getElementById('flashcard');
        this.isFlipped = !this.isFlipped;
        
        if (this.isFlipped) {
            flashcard.classList.add('flipped');
        } else {
            flashcard.classList.remove('flipped');
        }
    }
    
    resetCard() {
        const flashcard = document.getElementById('flashcard');
        flashcard.classList.remove('flipped');
        this.isFlipped = false;
    }
    
    previousCard() {
        if (this.currentCardIndex > 0) {
            this.currentCardIndex--;
            this.displayCard();
        }
    }
    
    nextCard() {
        if (this.currentCardIndex < this.cards.length - 1) {
            this.currentCardIndex++;
            this.displayCard();
        } else {
            this.showCompletion();
        }
    }
    
    recordUnderstanding(level) {
        const cardId = this.currentCardIndex;
        
        // 既存の記録を削除
        Object.keys(this.userProgress).forEach(key => {
            const index = this.userProgress[key].indexOf(cardId);
            if (index > -1) {
                this.userProgress[key].splice(index, 1);
            }
        });
        
        // 新しい理解度を記録
        this.userProgress[level].push(cardId);
        
        // 次のカードに進む
        setTimeout(() => {
            this.nextCard();
        }, 300);
    }
    
    updateNavigationButtons() {
        const prevBtn = document.getElementById('prev-card');
        const nextBtn = document.getElementById('next-card');
        
        prevBtn.disabled = this.currentCardIndex === 0;
        
        if (this.currentCardIndex === this.cards.length - 1) {
            nextBtn.textContent = '学習完了 →';
        } else {
            nextBtn.textContent = '次のカード →';
        }
    }
    
    updateProgress() {
        const counter = document.getElementById('card-counter');
        const progressFill = document.getElementById('progress-fill');
        
        counter.textContent = `${this.currentCardIndex + 1}/${this.cards.length}`;
        const progressPercent = ((this.currentCardIndex + 1) / this.cards.length) * 100;
        progressFill.style.width = `${progressPercent}%`;
    }
    
    showCompletion() {
        this.showScreen('completion-screen');
        this.displayCompletionStats();
    }
    
    displayCompletionStats() {
        const totalCards = this.cards.length;
        const difficultCount = this.userProgress.difficult.length;
        const okayCount = this.userProgress.okay.length;
        const easyCount = this.userProgress.easy.length;
        const unrecordedCount = totalCards - (difficultCount + okayCount + easyCount);
        
        document.getElementById('total-cards').textContent = totalCards;
        document.getElementById('difficult-cards').textContent = difficultCount + unrecordedCount;
        document.getElementById('mastered-cards').textContent = easyCount;
        
        // 推奨事項を表示
        this.displayRecommendations(difficultCount, okayCount, easyCount, unrecordedCount);
        
        // 復習ボタンの表示制御
        const reviewBtn = document.getElementById('review-difficult');
        if (difficultCount + unrecordedCount > 0) {
            reviewBtn.style.display = 'inline-block';
        } else {
            reviewBtn.style.display = 'none';
        }
    }
    
    displayRecommendations(difficult, okay, easy, unrecorded) {
        const recommendations = document.getElementById('recommendations');
        let message = '';
        
        const masteryRate = (easy / this.cards.length) * 100;
        
        if (masteryRate >= 80) {
            message = `
                <div class="recommendation excellent">
                    🎉 素晴らしい！${masteryRate.toFixed(1)}%の概念を習得しました。<br>
                    他のカテゴリにも挑戦してみましょう！
                </div>
            `;
        } else if (masteryRate >= 60) {
            message = `
                <div class="recommendation good">
                    👍 良い進歩です！${masteryRate.toFixed(1)}%の概念を習得しました。<br>
                    難しいカードを復習して理解を深めましょう。
                </div>
            `;
        } else {
            message = `
                <div class="recommendation needs-work">
                    📚 まだ改善の余地があります。${masteryRate.toFixed(1)}%の習得率です。<br>
                    焦らず復習を重ねて、確実に理解を深めていきましょう。
                </div>
            `;
        }
        
        // 次のステップの提案
        if (this.currentCategory === 'basic' && masteryRate >= 70) {
            message += `
                <div class="next-category-suggestion">
                    🚀 「Gitコマンドと操作」に挑戦する準備ができています！
                </div>
            `;
        } else if (this.currentCategory === 'commands' && masteryRate >= 70) {
            message += `
                <div class="next-category-suggestion">
                    🔧 「Gitの内部構造」で深い理解を得ましょう！
                </div>
            `;
        }
        
        recommendations.innerHTML = message;
    }
    
    restartCurrentCategory() {
        if (this.currentCategory) {
            this.startLearning(this.currentCategory);
        }
    }
    
    reviewDifficultCards() {
        if (!this.currentCategory || !this.originalCards.length) {
            alert('復習データがありません');
            return;
        }
        
        // 難しいカードと未記録のカードのみに絞る
        const difficultIndices = [...this.userProgress.difficult];
        const unrecordedIndices = [];
        
        // 元のカード数を基準に未記録をチェック
        for (let i = 0; i < this.originalCards.length; i++) {
            const isRecorded = Object.values(this.userProgress).some(arr => arr.includes(i));
            if (!isRecorded) {
                unrecordedIndices.push(i);
            }
        }
        
        const reviewIndices = [...difficultIndices, ...unrecordedIndices].sort((a, b) => a - b);
        
        if (reviewIndices.length === 0) {
            alert('復習が必要なカードはありません！');
            return;
        }
        
        // 復習用のカードリストを作成（元データから）
        this.cards = reviewIndices.map(index => this.originalCards[index]);
        this.currentCardIndex = 0;
        // 復習時は進捗をリセットしない
        const currentProgress = { ...this.userProgress };
        this.resetProgress();
        this.userProgress = currentProgress; // 進捗を復元
        
        document.getElementById('category-title').textContent = `${gitData[this.currentCategory].title} - 復習`;
        this.showScreen('learning-screen');
        this.displayCard();
        this.updateProgress();
    }
    
    resetProgress() {
        this.userProgress = {
            difficult: [],
            okay: [],
            easy: []
        };
        this.currentCardIndex = 0;
        this.isFlipped = false;
    }
}

// アプリケーションの初期化
document.addEventListener('DOMContentLoaded', () => {
    new GitLearningApp();
});

// PWA対応のためのサービスワーカー登録（HTTPSまたはlocalhostでのみ）
if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost')) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
                console.log('SW registered: ', registration);
            })
            .catch((registrationError) => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}