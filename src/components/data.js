const data = [
    {
        "id": 1,
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "price": 10.99,
        "rating": 4.4,
        "category": "Fiction",
        "imageUrl": "https://images.penguinrandomhouse.com/cover/9780743273565",
        "description": "A novel that explores the themes of wealth, society, and the American dream in the 1920s.",
        "reviews": [
            "A timeless classic that resonates with readers of all ages.",
            "The vivid portrayal of the Jazz Age is mesmerizing.",
            "A powerful critique of the American dream."
        ]
    },
    {
        "id": 2,
        "title": "To Kill a Mockingbird",
        "author": "Harper Lee",
        "price": 7.99,
        "rating": 4.8,
        "category": "Fiction",
        "imageUrl": "https://images.penguinrandomhouse.com/cover/9780061120084",
        "description": "A story of racial injustice and moral growth in the American South during the 1930s.",
        "reviews": [
            "A profoundly moving story about humanity and justice.",
            "The characters are richly drawn and unforgettable.",
            "A book that should be read by everyone at least once."
        ]
    },
    {
        "id": 3,
        "title": "1984",
        "author": "George Orwell",
        "price": 8.99,
        "rating": 4.7,
        "category": "Fiction",
        "imageUrl": "https://images.penguinrandomhouse.com/cover/9780451524935",
        "description": "A dystopian novel that delves into the dangers of totalitarianism and extreme political ideology.",
        "reviews": [
            "A chilling portrayal of a world where freedom is an illusion.",
            "Orwell's vision of the future is hauntingly relevant.",
            "A must-read for those interested in politics and power dynamics."
        ]
    },
    {
        "id": 4,
        "title": "Pride and Prejudice",
        "author": "Jane Austen",
        "price": 6.99,
        "rating": 4.9,
        "category": "Fiction",
        "imageUrl": "https://images.penguinrandomhouse.com/cover/9780141040349",
        "description": "A classic romance novel that explores themes of love, class, and societal expectations.",
        "reviews": [
            "A delightful read with wit and charm.",
            "The romance between Elizabeth and Darcy is iconic.",
            "Austen's commentary on society is sharp and timeless."
        ]
    },
    {
        "id": 5,
        "title": "The Catcher in the Rye",
        "author": "J.D. Salinger",
        "price": 9.99,
        "rating": 4.3,
        "category": "Fiction",
        "imageUrl": "https://images.penguinrandomhouse.com/cover/9780316769488",
        "description": "A novel that captures the struggles of teenage angst and alienation through the eyes of Holden Caulfield.",
        "reviews": [
            "A raw and honest portrayal of teenage rebellion.",
            "Holden's voice is unique and unforgettable.",
            "A book that resonates with anyone who has ever felt lost."
        ]
    },
    {
        "id": 6,
        "title": "Moby-Dick",
        "author": "Herman Melville",
        "price": 11.99,
        "rating": 4.2,
        "category": "Fiction",
        "imageUrl": "https://images.penguinrandomhouse.com/cover/9780142437246",
        "description": "An epic tale of obsession and revenge, centered around the pursuit of the great white whale, Moby-Dick.",
        "reviews": [
            "A monumental work of literature with rich symbolism.",
            "The narrative is as vast and deep as the ocean itself.",
            "A challenging but rewarding read for those who appreciate classic literature."
        ]
    },
    {
        "id": 7,
        "title": "Brave New World",
        "author": "Aldous Huxley",
        "price": 8.99,
        "rating": 4.6,
        "category": "Fiction",
        "imageUrl": "https://images.penguinrandomhouse.com/cover/9780060850524",
        "description": "A dystopian novel that explores a future society driven by technological control and consumerism.",
        "reviews": [
            "A thought-provoking examination of a society driven by conformity.",
            "Huxley's vision of the future is disturbingly plausible.",
            "A novel that raises important questions about freedom and individuality."
        ]
    },
    {
        "id": 8,
        "title": "The Hobbit",
        "author": "J.R.R. Tolkien",
        "price": 14.99,
        "rating": 4.9,
        "category": "Fiction",
        "imageUrl": "https://images.penguinrandomhouse.com/cover/9780547928227",
        "description": "A fantasy adventure that follows Bilbo Baggins as he embarks on an epic journey.",
        "reviews": [
            "A magical and enchanting tale of adventure.",
            "Tolkien's world-building is unparalleled.",
            "A must-read for fans of fantasy literature."
        ]
    },
    {
        "id": 9,
        "title": "The Road",
        "author": "Cormac McCarthy",
        "price": 12.99,
        "rating": 4.7,
        "category": "Fiction",
        "imageUrl": "https://images.penguinrandomhouse.com/cover/9780307387899",
        "description": "A post-apocalyptic novel that tells the story of a father and son’s survival in a desolate world.",
        "reviews": [
            "A haunting and powerful narrative of survival.",
            "McCarthy's prose is stark and beautiful.",
            "A deeply moving story about love and endurance."
        ]
    },
    {
        "id": 10,
        "title": "The Lord of the Rings",
        "author": "J.R.R. Tolkien",
        "price": 22.99,
        "rating": 4.9,
        "category": "Fiction",
        "imageUrl": "https://images.penguinrandomhouse.com/cover/9780544003415",
        "description": "An epic fantasy trilogy that follows the quest to destroy the One Ring and defeat the Dark Lord Sauron.",
        "reviews": [
            "A masterpiece of fantasy literature.",
            "Tolkien's world is rich with detail and history.",
            "An epic tale of good versus evil that continues to inspire."
        ]
    },
    {
        "id": 11,
        "title": "The Art of War",
        "author": "Sun Tzu",
        "price": 6.99,
        "rating": 4.6,
        "category": "History",
        "imageUrl": "https://images.penguinrandomhouse.com/cover/9781590302255",
        "description": "An ancient Chinese military treatise that offers strategic advice on warfare and conflict resolution.",
        "reviews": [
            "Timeless wisdom that applies to both war and everyday life.",
            "A must-read for anyone interested in strategy and leadership.",
            "Sun Tzu's insights are as relevant today as they were centuries ago."
        ]
    },
    {
        "id": 12,
        "title": "Sapiens: A Brief History of Humankind",
        "author": "Yuval Noah Harari",
        "price": 18.99,
        "rating": 4.8,
        "category": "History",
        "imageUrl": "https://images.penguinrandomhouse.com/cover/9780062316110",
        "description": "A sweeping narrative of human history, exploring how Homo sapiens came to dominate the planet.",
        "reviews": [
            "A thought-provoking look at the history of our species.",
            "Harari's writing is engaging and accessible.",
            "A fascinating read that challenges conventional wisdom."
        ]
    },
    {
        "id": 13,
        "title": "Guns, Germs, and Steel",
        "author": "Jared Diamond",
        "price": 15.99,
        "rating": 4.7,
        "category": "History",
        "imageUrl": "https://images.penguinrandomhouse.com/cover/9780393354324",
        "description": "A comprehensive examination of the factors that influenced the development of human societies.",
        "reviews": [
            "A groundbreaking work that redefines our understanding of history.",
            "Diamond's research is thorough and compelling.",
            "A book that will change the way you see the world."
        ]
    },
    {
        "id": 14,
        "title": "The Diary of a Young Girl",
        "author": "Anne Frank",
        "price": 7.99,
        "rating": 4.9,
        "category": "History",
        "imageUrl": "https://images.penguinrandomhouse.com/cover/9780553296983",
        "description":
            "The poignant and powerful diary of Anne Frank, a Jewish girl hiding from the Nazis during World War II.",
        "reviews": [
            "A heartbreaking and inspiring account of courage and hope.",
            "Anne Frank's voice is powerful and unforgettable.",
            "A must-read for anyone interested in the human side of history."
        ]
    },
    {
        "id": 15,
        "title": "1776",
        "author": "David McCullough",
        "price": 16.99,
        "rating": 4.7,
        "category": "History",
        "imageUrl": "https://images.penguinrandomhouse.com/cover/9780743226714",
        "description": "A gripping account of the pivotal year in American history, focusing on the events of the American Revolution.",
        "reviews": [
            "A masterful retelling of the events that shaped America.",
            "McCullough's writing brings history to life.",
            "A compelling read for anyone interested in American history."
        ]
    },
    {
        "id": 16,
        "title": "The Innovator's Dilemma",
        "author": "Clayton M. Christensen",
        "price": 14.99,
        "rating": 4.5,
        "category": "Business",
        "imageUrl": "https://images.penguinrandomhouse.com/cover/9780062060242",
        "description": "An exploration of why successful companies fail when faced with disruptive innovation.",
        "reviews": [
            "A groundbreaking book that redefines how we think about innovation.",
            "Christensen's insights are crucial for anyone in business.",
            "A must-read for entrepreneurs and business leaders."
        ]
    },
    {
        "id": 17,
        "title": "Good to Great",
        "author": "Jim Collins",
        "price": 17.99,
        "rating": 4.8,
        "category": "Business",
        "imageUrl": "https://images.penguinrandomhouse.com/cover/9780066620992",
        "description": "An analysis of how companies transition from being good to truly great, and the factors that contribute to their success.",
        "reviews": [
            "A compelling look at what makes companies great.",
            "Collins' research is thorough and insightful.",
            "A must-read for anyone interested in business and leadership."
        ]
    },
    {
        "id": 18,
        "title": "The Lean Startup",
        "author": "Eric Ries",
        "price": 13.99,
        "rating": 4.6,
        "category": "Business",
        "imageUrl": "https://images.penguinrandomhouse.com/cover/9780307887894",
        "description": "A guide to building successful startups through continuous innovation and validation.",
        "reviews": [
            "A revolutionary approach to building startups.",
            "Ries' methodology is practical and effective.",
            "A must-read for aspiring entrepreneurs."
        ]
    },
    {
        "id": 19,
        "title": "Zero to One",
        "author": "Peter Thiel",
        "price": 16.99,
        "rating": 4.7,
        "category": "Business",
        "imageUrl": "https://images.penguinrandomhouse.com/cover/9780804139298",
        "description": "A book that explores how to create something new and valuable from scratch, rather than merely copying existing ideas.",
        "reviews": [
            "A thought-provoking guide to innovation.",
            "Thiel's insights are invaluable for entrepreneurs.",
            "A must-read for those looking to build the future."
        ]
    },
    {
        "id": 20,
        "title": "The 7 Habits of Highly Effective People",
        "author": "Stephen R. Covey",
        "price": 12.99,
        "rating": 4.8,
        "category": "Business",
        "imageUrl": "https://images.penguinrandomhouse.com/cover/9780743269513",
        "description": "A guide to personal and professional success through the development of seven key habits.",
        "reviews": [
            "A timeless guide to personal and professional development.",
            "Covey's principles are practical and transformative.",
            "A must-read for anyone looking to improve their life."
        ]
    },
    {
        "id": 21,
        "title": "Thinking, Fast and Slow",
        "author": "Daniel Kahneman",
        "price": 14.99,
        "rating": 4.5,
        "category": "Nonfiction",
        "imageUrl": "https://images.penguinrandomhouse.com/cover/9780374533557",
        "description": "An exploration of the two systems of thinking that drive our decisions: the fast, intuitive system and the slow, deliberate system.",
        "reviews": [
            "A fascinating look at how we think.",
            "Kahneman's research is groundbreaking and insightful.",
            "A must-read for anyone interested in psychology and decision-making."
        ]
    },
    {
        "id": 22,
        "title": "Quiet: The Power of Introverts in a World That Can't Stop Talking",
        "author": "Susan Cain",
        "price": 13.99,
        "rating": 4.7,
        "category": "Nonfiction",
        "imageUrl": "https://images.penguinrandomhouse.com/cover/9780307352149",
        "description": "An exploration of the power of introverts and how they contribute to society in a world that often values extroversion.",
        "reviews": [
            "A powerful validation of the introvert experience.",
            "Cain's writing is engaging and insightful.",
            "A must-read for introverts and those who love them."
        ]
    },
    {
        "id": 23,
        "title": "Outliers: The Story of Success",
        "author": "Malcolm Gladwell",
        "price": 14.99,
        "rating": 4.6,
        "category": "Nonfiction",
        "imageUrl": "https://images.penguinrandomhouse.com/cover/9780316017930",
        "description": "An investigation into the factors that contribute to high levels of success, from cultural background to timing and opportunity.",
        "reviews": [
            "A fascinating look at the hidden factors behind success.",
            "Gladwell's storytelling is captivating and thought-provoking.",
            "A must-read for anyone interested in what makes people successful."
        ]
    },
    {
        "id": 24,
        "title": "The Power of Habit: Why We Do What We Do in Life and Business",
        "author": "Charles Duhigg",
        "price": 13.99,
        "rating": 4.7,
        "category": "Nonfiction",
        "imageUrl": "https://images.penguinrandomhouse.com/cover/9780812981605",
        "description": "An exploration of the science behind habits and how we can change them to improve our lives.",
        "reviews": [
            "A practical guide to understanding and changing habits.",
            "Duhigg's insights are both fascinating and actionable.",
            "A must-read for anyone looking to take control of their habits."
        ]
    },
    {
        "id": 25,
        "title": "The Wright Brothers",
        "author": "David McCullough",
        "price": 18.99,
        "rating": 4.7,
        "category": "History",
        "imageUrl": "https://images.penguinrandomhouse.com/cover/9781476728759",
        "description": "A detailed account of the lives of the Wright brothers, who pioneered human flight and changed the course of history.",
        "reviews": [
            "A gripping tale of innovation and determination.",
            "McCullough brings the Wright brothers to life with his vivid storytelling.",
            "A must-read for anyone interested in the history of aviation."
        ]
    },
    {
        "id": 26,
        "title": "The Shining",
        "author": "Stephen King",
        "price": 9.99,
        "rating": 4.5,
        "category": "Mystery",
        "imageUrl": "https://images.penguinrandomhouse.com/cover/9780307743657",
        "description": "A chilling tale of supernatural horror set in the isolated Overlook Hotel, where evil forces take hold of the Torrance family.",
        "reviews": [
            "A masterful work of psychological horror.",
            "King's ability to create suspense is unparalleled.",
            "A terrifying and unforgettable story."
        ]
    },
    {
        "id": 27,
        "title": "Gone Girl",
        "author": "Gillian Flynn",
        "price": 14.99,
        "rating": 4.3,
        "category": "Mystery",
        "imageUrl": "https://images.penguinrandomhouse.com/cover/9780307588371",
        "description": "A psychological thriller that unravels the mysteries behind the disappearance of Amy Dunne, with dark and twisted revelations.",
        "reviews": [
            "A brilliantly crafted thriller full of twists and turns.",
            "Flynn's writing is sharp and captivating.",
            "A dark and thrilling read that keeps you guessing until the end."
        ]
    },
    {
        "id": 28,
        "title": "The Girl with the Dragon Tattoo",
        "author": "Stieg Larsson",
        "price": 15.99,
        "rating": 4.4,
        "category": "Mystery",
        "imageUrl": "https://images.penguinrandomhouse.com/cover/9780307454546",
        "description": "A gripping mystery involving a journalist and a brilliant hacker who uncover dark secrets while investigating a decades-old disappearance.",
        "reviews": [
            "A thrilling and complex mystery with unforgettable characters.",
            "Larsson's storytelling is intricate and gripping.",
            "A must-read for fans of crime fiction."
        ]
    },

]
export default data;