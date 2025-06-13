document.addEventListener('DOMContentLoaded', () => {
    const ukrainianIPASounds = [
        // Vowels
        { symbol: '/i/', phonemeFile: 'ukrainain-i.ogg', examples: [
            { word: 'дім', audioFile: 'дім.ogg' }, { word: 'сіль', audioFile: 'сіль.ogg' }, { word: 'лід', audioFile: 'лід.ogg' }
        ]},
        { symbol: '/ɪ/', phonemeFile: 'ukrainain-ɪ.ogg', examples: [
            { word: 'син', audioFile: 'син.ogg' }, { word: 'жито', audioFile: 'жито.ogg' }, { word: 'бити', audioFile: 'бити.ogg' }
        ]},
        { symbol: '/ɛ/', phonemeFile: 'ukrainain-ɛ.ogg', examples: [
            { word: 'день', audioFile: 'день.ogg' }, { word: 'село', audioFile: 'село.ogg' }, { word: 'мед', audioFile: 'мед.ogg' }
        ]},
        { symbol: '/a/', phonemeFile: 'ukrainain-a.ogg', examples: [
            { word: 'так', audioFile: 'так.ogg' }, { word: 'мама', audioFile: 'мама.ogg' }, { word: 'сади', audioFile: 'сади.ogg' }
        ]},
        { symbol: '/ɔ/', phonemeFile: 'ukrainain-ɔ.ogg', examples: [
            { word: 'сон', audioFile: 'сон.ogg' }, { word: 'вода', audioFile: 'вода.ogg' }, { word: 'поле', audioFile: 'поле.ogg' }
        ]},
        { symbol: '/u/', phonemeFile: 'ukrainain-u.ogg', examples: [
            { word: 'дуб', audioFile: 'дуб.ogg' }, { word: 'сума', audioFile: 'сума.ogg' }, { word: 'рука', audioFile: 'рука.ogg' }
        ]},
        // Consonants
        { symbol: '/p/', phonemeFile: 'ukrainian-p.ogg', examples: [
            { word: 'тато', audioFile: 'тато.ogg' }, { word: 'поле', audioFile: 'поле.ogg' }, { word: 'суп', audioFile: 'суп.ogg' }
        ]},
        { symbol: '/b/', phonemeFile: 'ukrainian-b.ogg', examples: [
            { word: 'дуб', audioFile: 'дуб.ogg' }, { word: 'риба', audioFile: 'риба.ogg' }, { word: 'баба', audioFile: 'баба.ogg' }
        ]},
        { symbol: '/t/', phonemeFile: 'ukrainian-t.ogg', examples: [
            { word: 'так', audioFile: 'так.ogg' }, { word: 'тінь', audioFile: 'тінь.ogg' }, { word: 'тато', audioFile: 'тато.ogg' }
        ]},
        { symbol: '/d/', phonemeFile: 'ukrainian-d.ogg', examples: [
            { word: 'дім', audioFile: 'дім.ogg' }, { word: 'вода', audioFile: 'вода.ogg' }, { word: 'день', audioFile: 'день.ogg' }
        ]},
        { symbol: '/k/', phonemeFile: 'ukrainian-k.ogg', examples: [
            { word: 'кіт', audioFile: 'кіт.ogg' }, { word: 'так', audioFile: 'так.ogg' }, { word: 'рука', audioFile: 'рука.ogg' }
        ]},
        { symbol: '/ɡ/', phonemeFile: 'ukrainian-g.ogg', examples: [
            { word: 'ґанок', audioFile: 'ґанок.ogg' }, { word: 'ґудзик', audioFile: 'ґудзик.ogg' }, { word: 'аґрус', audioFile: 'аґрус.ogg' }
        ]},
        { symbol: '/m/', phonemeFile: 'ukrainian-m.ogg', examples: [
            { word: 'мама', audioFile: 'мама.ogg' }, { word: 'дім', audioFile: 'дім.ogg' }, { word: 'сума', audioFile: 'сума.ogg' }
        ]},
        { symbol: '/n/', phonemeFile: 'ukrainian-n.ogg', examples: [
            { word: 'сон', audioFile: 'сон.ogg' }, { word: 'ніс', audioFile: 'ніс.ogg' }, { word: 'син', audioFile: 'син.ogg' }
        ]},
        { symbol: '/f/', phonemeFile: 'ukrainian-f.ogg', examples: [
            { word: 'фікус', audioFile: 'фікус.ogg' }, { word: 'факт', audioFile: 'факт.ogg' }, { word: 'кафе', audioFile: 'кафе.ogg' }
        ]},
        { symbol: '/v/', phonemeFile: 'ukrainian-v.ogg', examples: [
            { word: 'вода', audioFile: 'вода.ogg' }, { word: 'вовк', audioFile: 'вовк.ogg' }, { word: 'лев', audioFile: 'лев.ogg' }
        ]},
        { symbol: '/s/', phonemeFile: 'ukrainian-s.ogg', examples: [
            { word: 'сон', audioFile: 'сон.ogg' }, { word: 'сіль', audioFile: 'сіль.ogg' }, { word: 'ліс', audioFile: 'ліс.ogg' }
        ]},
        { symbol: '/z/', phonemeFile: 'ukrainian-z.ogg', examples: [
            { word: 'зуб', audioFile: 'зуб.ogg' }, { word: 'ваза', audioFile: 'ваза.ogg' }, { word: 'зима', audioFile: 'зима.ogg' }
        ]},
        { symbol: '/ʃ/', phonemeFile: 'ukrainian-sh.ogg', examples: [
            { word: 'шіст', audioFile: 'шіст.ogg' }, { word: 'шапка', audioFile: 'шапка.ogg' }, { word: 'миша', audioFile: 'миша.ogg' }
        ]},
        { symbol: '/ʒ/', phonemeFile: 'ukrainian-zh.ogg', examples: [
            { word: 'жаба', audioFile: 'жаба.ogg' }, { word: 'жито', audioFile: 'жито.ogg' }, { word: 'вуж', audioFile: 'вуж.ogg' }
        ]},
        { symbol: '/x/', phonemeFile: 'ukrainian-kh.ogg', examples: [
            { word: 'хліб', audioFile: 'хліб.ogg' }, { word: 'хата', audioFile: 'хата.ogg' }, { word: 'вухо', audioFile: 'вухо.ogg' }
        ]},
        { symbol: '/ɦ/', phonemeFile: 'ukrainian-h.ogg', examples: [
            { word: 'голова', audioFile: 'голова.ogg' }, { word: 'нога', audioFile: 'нога.ogg' }, { word: 'сніг', audioFile: 'сніг.ogg' }
        ]},
        { symbol: '/t͡s/', phonemeFile: 'ukrainian-ts.ogg', examples: [
            { word: 'цап', audioFile: 'цап.ogg' }, { word: 'ціна', audioFile: 'ціна.ogg' }, { word: 'кінець', audioFile: 'кінець.ogg' }
        ]},
        { symbol: '/d͡z/', phonemeFile: 'ukrainian-dz.ogg', examples: [
            { word: 'дзеркало', audioFile: 'дзеркало.ogg' }, { word: 'дзьоб', audioFile: 'дзьоб.ogg' }, { word: 'ґедзь', audioFile: 'ґедзь.ogg' }
        ]},
        { symbol: '/t͡ʃ/', phonemeFile: 'ukrainian-ch.ogg', examples: [
            { word: 'час', audioFile: 'час.ogg' }, { word: 'ніч', audioFile: 'ніч.ogg' }, { word: 'читати', audioFile: 'читати.ogg' }
        ]},
        { symbol: '/d͡ʒ/', phonemeFile: 'ukrainian-dzh.ogg', examples: [
            { word: 'джміль', audioFile: 'джміль.ogg' }, { word: 'джем', audioFile: 'джем.ogg' }, { word: 'ходжу', audioFile: 'ходжу.ogg' }
        ]},
        { symbol: '/l/', phonemeFile: 'ukrainian-l.ogg', examples: [
            { word: 'лев', audioFile: 'лев.ogg' }, { word: 'поле', audioFile: 'поле.ogg' }, { word: 'сіль', audioFile: 'сіль.ogg' }
        ]},
        { symbol: '/r/', phonemeFile: 'ukrainian-r.ogg', examples: [
            { word: 'рука', audioFile: 'рука.ogg' }, { word: 'риба', audioFile: 'риба.ogg' }, { word: 'цар', audioFile: 'цар.ogg' }
        ]},
        { symbol: '/j/', phonemeFile: 'ukrainian-j.ogg', examples: [
            { word: 'йод', audioFile: 'йод.ogg' }, { word: 'яма', audioFile: 'яма.ogg' }, { word: 'мої', audioFile: 'мої.ogg' }
        ]},
        // Palatalized Consonants
        { symbol: '/tʲ/', phonemeFile: 'ukrainian-t-palatalized.ogg', examples: [
            { word: 'тінь', audioFile: 'тінь.ogg' }, { word: 'тісто', audioFile: 'тісто.ogg' }, { word: 'тютюн', audioFile: 'тютюн.ogg' }
        ]},
        { symbol: '/dʲ/', phonemeFile: 'ukrainian-d-palatalized.ogg', examples: [
            { word: 'дідько', audioFile: 'дідько.ogg' }, { word: 'дядько', audioFile: 'дядько.ogg' }, { word: 'мідь', audioFile: 'мідь.ogg' }
        ]},
        { symbol: '/sʲ/', phonemeFile: 'ukrainian-s-palatalized.ogg', examples: [
            { word: 'сіно', audioFile: 'сіно.ogg' }, { word: 'вісь', audioFile: 'вісь.ogg' }, { word: 'сьомий', audioFile: 'сьомий.ogg' }
        ]},
        { symbol: '/zʲ/', phonemeFile: 'ukrainian-z-palatalized.ogg', examples: [
            { word: 'зір', audioFile: 'зір.ogg' }, { word: 'зяблик', audioFile: 'зяблик.ogg' }, { word: 'князь', audioFile: 'князь.ogg' }
        ]},
        { symbol: '/t͡sʲ/', phonemeFile: 'ukrainian-ts-palatalized.ogg', examples: [
            { word: 'ціль', audioFile: 'ціль.ogg' }, { word: 'палець', audioFile: 'палець.ogg' }, { word: 'хлопець', audioFile: 'хлопец.ogg' }
        ]},
        { symbol: '/lʲ/', phonemeFile: 'ukrainian-l-palatalized.ogg', examples: [
            { word: 'ліс', audioFile: 'ліс.ogg' }, { word: 'лялька', audioFile: 'лялька.ogg' }, { word: 'сіль', audioFile: 'сіль.ogg' }
        ]},
        { symbol: '/nʲ/', phonemeFile: 'ukrainian-n-palatalized.ogg', examples: [
            { word: 'ніч', audioFile: 'ніч.ogg' }, { word: 'кінь', audioFile: 'кінь.ogg' }, { word: 'синь', audioFile: 'синь.ogg' }
        ]},
    ];

    const container = document.getElementById('soundboard-container');
    const audioPlayer = document.getElementById('audio-player');
    let activeElement = null;

    // Stop audio and remove the 'playing' class from the active element
    const stopCurrentAudio = () => {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
        if (activeElement) {
            activeElement.classList.remove('playing');
            activeElement = null;
        }
    };
    
    // Add event listener to the single audio player to handle cleanup when a sound finishes
    audioPlayer.addEventListener('ended', stopCurrentAudio);
    audioPlayer.addEventListener('error', stopCurrentAudio);


    const createSoundCard = (soundObj) => {
        const cardWrapper = document.createElement('div');
        cardWrapper.className = 'sound-card';

        // --- Create and handle main phoneme sound ---
        const ipaSymbolContainer = document.createElement('div');
        ipaSymbolContainer.className = 'ipa-symbol-container';
        ipaSymbolContainer.innerHTML = `<h2 class="ipa-symbol">${soundObj.symbol}</h2>`;
        
        ipaSymbolContainer.addEventListener('click', () => {
            stopCurrentAudio();
            activeElement = ipaSymbolContainer; // Set the current playing element
            
            audioPlayer.src = `assets/sound/ukrainian-sounds/${soundObj.phonemeFile}`;
            audioPlayer.load();
            const playPromise = audioPlayer.play();

            if (playPromise !== undefined) {
                playPromise.then(_ => {
                    // Automatic playback started!
                    ipaSymbolContainer.classList.add('playing');
                }).catch(error => {
                    // Auto-play was prevented
                    console.error("Playback failed:", error);
                    stopCurrentAudio();
                });
            }
        });

        // --- Create and handle example words list ---
        const wordList = document.createElement('ul');
        wordList.className = 'example-words-list';

        soundObj.examples.forEach(example => {
            const listItem = document.createElement('li');
            
            const wordText = document.createElement('span');
            wordText.className = 'word-text';
            wordText.textContent = example.word;
            
            const audioIcon = document.createElement('div');
            audioIcon.className = 'word-audio-icon';
            audioIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>`;

            audioIcon.addEventListener('click', (e) => {
                e.stopPropagation();
                stopCurrentAudio();
                activeElement = audioIcon; // Set the current playing element
                
                audioPlayer.src = `assets/sound/ukrainian-words/${example.audioFile}`;
                audioPlayer.load();
                const playPromise = audioPlayer.play();

                if (playPromise !== undefined) {
                    playPromise.then(_ => {
                        audioIcon.classList.add('playing');
                    }).catch(error => {
                        console.error("Playback failed:", error);
                        stopCurrentAudio();
                    });
                }
            });

            listItem.appendChild(wordText);
            listItem.appendChild(audioIcon);
            wordList.appendChild(listItem);
        });
        
        cardWrapper.appendChild(ipaSymbolContainer);
        cardWrapper.appendChild(wordList);
        container.appendChild(cardWrapper);
    };

    ukrainianIPASounds.forEach(createSoundCard);
});
