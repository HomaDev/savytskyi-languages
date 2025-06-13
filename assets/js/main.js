document.addEventListener('DOMContentLoaded', () => {
    const ukrainianIPASounds = [
        // Vowels
        { symbol: '/i/', phonemeFile: 'i.mp3', examples: [
            { word: 'дім', audioFile: 'дім.mp3' }, { word: 'сіль', audioFile: 'сіль.mp3' }, { word: 'лід', audioFile: 'лід.mp3' }
        ]},
        { symbol: '/ɪ/', phonemeFile: 'ɪ.mp3', examples: [
            { word: 'син', audioFile: 'син.mp3' }, { word: 'жито', audioFile: 'жито.mp3' }, { word: 'бити', audioFile: 'бити.mp3' }
        ]},
        { symbol: '/ɛ/', phonemeFile: 'ɛ.mp3', examples: [
            { word: 'день', audioFile: 'день.mp3' }, { word: 'село', audioFile: 'село.mp3' }, { word: 'мед', audioFile: 'мед.mp3' }
        ]},
        { symbol: '/a/', phonemeFile: 'a.mp3', examples: [
            { word: 'так', audioFile: 'так.mp3' }, { word: 'мама', audioFile: 'мама.mp3' }, { word: 'сади', audioFile: 'сади.mp3' }
        ]},
        { symbol: '/ɔ/', phonemeFile: 'ɔ.mp3', examples: [
            { word: 'сон', audioFile: 'сон.mp3' }, { word: 'вода', audioFile: 'вода.mp3' }, { word: 'поле', audioFile: 'поле.mp3' }
        ]},
        { symbol: '/u/', phonemeFile: 'u.mp3', examples: [
            { word: 'дуб', audioFile: 'дуб.mp3' }, { word: 'сума', audioFile: 'сума.mp3' }, { word: 'рука', audioFile: 'рука.mp3' }
        ]},
        // Consonants
        { symbol: '/p/', phonemeFile: 'p.mp3', examples: [
            { word: 'тато', audioFile: 'тато.mp3' }, { word: 'поле', audioFile: 'поле.mp3' }, { word: 'суп', audioFile: 'суп.mp3' }
        ]},
        { symbol: '/b/', phonemeFile: 'b.mp3', examples: [
            { word: 'дуб', audioFile: 'дуб.mp3' }, { word: 'риба', audioFile: 'риба.mp3' }, { word: 'баба', audioFile: 'баба.mp3' }
        ]},
        { symbol: '/t/', phonemeFile: 't.mp3', examples: [
            { word: 'так', audioFile: 'так.mp3' }, { word: 'тінь', audioFile: 'тінь.mp3' }, { word: 'тато', audioFile: 'тато.mp3' }
        ]},
        { symbol: '/d/', phonemeFile: 'd.mp3', examples: [
            { word: 'дім', audioFile: 'дім.mp3' }, { word: 'вода', audioFile: 'вода.mp3' }, { word: 'день', audioFile: 'день.mp3' }
        ]},
        { symbol: '/k/', phonemeFile: 'k.mp3', examples: [
            { word: 'кіт', audioFile: 'кіт.mp3' }, { word: 'так', audioFile: 'так.mp3' }, { word: 'рука', audioFile: 'рука.mp3' }
        ]},
        { symbol: '/ɡ/', phonemeFile: 'g.mp3', examples: [
            { word: 'ґанок', audioFile: 'ґанок.mp3' }, { word: 'ґудзик', audioFile: 'ґудзик.mp3' }, { word: 'аґрус', audioFile: 'аґрус.mp3' }
        ]},
        { symbol: '/m/', phonemeFile: 'm.mp3', examples: [
            { word: 'мама', audioFile: 'мама.mp3' }, { word: 'дім', audioFile: 'дім.mp3' }, { word: 'сума', audioFile: 'сума.mp3' }
        ]},
        { symbol: '/n/', phonemeFile: 'n.mp3', examples: [
            { word: 'сон', audioFile: 'сон.mp3' }, { word: 'ніс', audioFile: 'ніс.mp3' }, { word: 'син', audioFile: 'син.mp3' }
        ]},
        { symbol: '/f/', phonemeFile: 'f.mp3', examples: [
            { word: 'фікус', audioFile: 'фікус.mp3' }, { word: 'факт', audioFile: 'факт.mp3' }, { word: 'кафе', audioFile: 'кафе.mp3' }
        ]},
        { symbol: '/v/', phonemeFile: 'v.mp3', examples: [
            { word: 'вода', audioFile: 'вода.mp3' }, { word: 'вовк', audioFile: 'вовк.mp3' }, { word: 'лев', audioFile: 'лев.mp3' }
        ]},
        { symbol: '/s/', phonemeFile: 's.mp3', examples: [
            { word: 'сон', audioFile: 'сон.mp3' }, { word: 'сіль', audioFile: 'сіль.mp3' }, { word: 'ліс', audioFile: 'ліс.mp3' }
        ]},
        { symbol: '/z/', phonemeFile: 'z.mp3', examples: [
            { word: 'зуб', audioFile: 'зуб.mp3' }, { word: 'ваза', audioFile: 'ваза.mp3' }, { word: 'зима', audioFile: 'зима.mp3' }
        ]},
        { symbol: '/ʃ/', phonemeFile: 'sh.mp3', examples: [
            { word: 'шіст', audioFile: 'шіст.mp3' }, { word: 'шапка', audioFile: 'шапка.mp3' }, { word: 'миша', audioFile: 'миша.mp3' }
        ]},
        { symbol: '/ʒ/', phonemeFile: 'zh.mp3', examples: [
            { word: 'жаба', audioFile: 'жаба.mp3' }, { word: 'жито', audioFile: 'жито.mp3' }, { word: 'вуж', audioFile: 'вуж.mp3' }
        ]},
        { symbol: '/x/', phonemeFile: 'kh.mp3', examples: [
            { word: 'хліб', audioFile: 'хліб.mp3' }, { word: 'хата', audioFile: 'хата.mp3' }, { word: 'вухо', audioFile: 'вухо.mp3' }
        ]},
        { symbol: '/ɦ/', phonemeFile: 'h.mp3', examples: [
            { word: 'голова', audioFile: 'голова.mp3' }, { word: 'нога', audioFile: 'нога.mp3' }, { word: 'сніг', audioFile: 'сніг.mp3' }
        ]},
        { symbol: '/t͡s/', phonemeFile: 'ts.mp3', examples: [
            { word: 'цап', audioFile: 'цап.mp3' }, { word: 'ціна', audioFile: 'ціна.mp3' }, { word: 'кінець', audioFile: 'кінець.mp3' }
        ]},
        { symbol: '/d͡z/', phonemeFile: 'dz.mp3', examples: [
            { word: 'дзеркало', audioFile: 'дзеркало.mp3' }, { word: 'дзьоб', audioFile: 'дзьоб.mp3' }, { word: 'ґедзь', audioFile: 'ґедзь.mp3' }
        ]},
        { symbol: '/t͡ʃ/', phonemeFile: 'ch.mp3', examples: [
            { word: 'час', audioFile: 'час.mp3' }, { word: 'ніч', audioFile: 'ніч.mp3' }, { word: 'читати', audioFile: 'читати.mp3' }
        ]},
        { symbol: '/d͡ʒ/', phonemeFile: 'dzh.mp3', examples: [
            { word: 'джміль', audioFile: 'джміль.mp3' }, { word: 'джем', audioFile: 'джем.mp3' }, { word: 'ходжу', audioFile: 'ходжу.mp3' }
        ]},
        { symbol: '/l/', phonemeFile: 'l.mp3', examples: [
            { word: 'лев', audioFile: 'лев.mp3' }, { word: 'поле', audioFile: 'поле.mp3' }, { word: 'сіль', audioFile: 'сіль.mp3' }
        ]},
        { symbol: '/r/', phonemeFile: 'r.mp3', examples: [
            { word: 'рука', audioFile: 'рука.mp3' }, { word: 'риба', audioFile: 'риба.mp3' }, { word: 'цар', audioFile: 'цар.mp3' }
        ]},
        { symbol: '/j/', phonemeFile: 'j.mp3', examples: [
            { word: 'йод', audioFile: 'йод.mp3' }, { word: 'яма', audioFile: 'яма.mp3' }, { word: 'мої', audioFile: 'мої.mp3' }
        ]},
        // Palatalized Consonants
        { symbol: '/tʲ/', phonemeFile: 't-palatalized.mp3', examples: [
            { word: 'тінь', audioFile: 'тінь.mp3' }, { word: 'тісто', audioFile: 'тісто.mp3' }, { word: 'тютюн', audioFile: 'тютюн.mp3' }
        ]},
        { symbol: '/dʲ/', phonemeFile: 'd-palatalized.mp3', examples: [
            { word: 'дідько', audioFile: 'дідько.mp3' }, { word: 'дядько', audioFile: 'дядько.mp3' }, { word: 'мідь', audioFile: 'мідь.mp3' }
        ]},
        { symbol: '/sʲ/', phonemeFile: 's-palatalized.mp3', examples: [
            { word: 'сіно', audioFile: 'сіно.mp3' }, { word: 'вісь', audioFile: 'вісь.mp3' }, { word: 'сьомий', audioFile: 'сьомий.mp3' }
        ]},
        { symbol: '/zʲ/', phonemeFile: 'z-palatalized.mp3', examples: [
            { word: 'зір', audioFile: 'зір.mp3' }, { word: 'зяблик', audioFile: 'зяблик.mp3' }, { word: 'князь', audioFile: 'князь.mp3' }
        ]},
        { symbol: '/t͡sʲ/', phonemeFile: 'ts-palatalized.mp3', examples: [
            { word: 'ціль', audioFile: 'ціль.mp3' }, { word: 'палець', audioFile: 'палець.mp3' }, { word: 'хлопець', audioFile: 'хлопець.mp3' } // Assuming хлопец.ogg was a typo for хлопець.mp3
        ]},
        { symbol: '/lʲ/', phonemeFile: 'l-palatalized.mp3', examples: [
            { word: 'ліс', audioFile: 'ліс.mp3' }, { word: 'лялька', audioFile: 'лялька.mp3' }, { word: 'сіль', audioFile: 'сіль.mp3' }
        ]},
        { symbol: '/nʲ/', phonemeFile: 'n-palatalized.mp3', examples: [
            { word: 'ніч', audioFile: 'ніч.mp3' }, { word: 'кінь', audioFile: 'кінь.mp3' }, { word: 'синь', audioFile: 'синь.mp3' }
        ]},
    ];

    const container = document.getElementById('soundboard-container');
    const audioPlayer = document.getElementById('audio-player');
    let activeElement = null;
    let isAudioContextUnlocked = false; // Flag for iOS audio unlock

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
    audioPlayer.addEventListener('error', (e) => {
        console.error('Audio player error event:', e, audioPlayer.error);
        stopCurrentAudio();
    });

    // Function to play a sound, handling iOS unlock
    const playSound = (element, soundFile, pathPrefix) => {
        // If audio context is not unlocked, try to unlock it first
        if (!isAudioContextUnlocked) {
            // On iOS, the first audio play must be directly user-initiated.
            // We play the requested sound and immediately pause it to "unlock" the audio context.
            audioPlayer.src = `${pathPrefix}${soundFile}`;
            // audioPlayer.load(); // .play() should initiate loading if src is set.
                               // Removing this to see if it makes a difference in the unlock phase.
            const unlockPromise = audioPlayer.play();

            if (unlockPromise !== undefined) {
                unlockPromise.then(() => {
                    audioPlayer.pause(); // Immediately pause after starting
                    audioPlayer.currentTime = 0; // Reset
                    isAudioContextUnlocked = true;
                    console.log("Audio context unlocked for iOS.");
                    // Now play the sound for real
                    actuallyPlaySound(element, soundFile, pathPrefix);
                }).catch(error => {
                    console.error("Audio unlock play() FAILED. Subsequent plays might also fail on iOS. Check audio file format and ensure user interaction.", error, audioPlayer.error);
                    // Don't mark as unlocked if the initial play fails. User might need to interact again.
                    stopCurrentAudio(); // Clean up UI
                });
            } else {
                // Fallback for browsers that don't return a promise (rare for modern browsers)
                // Assume it might work or not be needed, or try to play directly.
                console.warn("audio.play() did not return a promise during unlock. Proceeding by tentatively marking as unlocked.");
                isAudioContextUnlocked = true; // Tentatively mark as unlocked
                actuallyPlaySound(element, soundFile, pathPrefix);
            }
        } else {
            // Audio context is already unlocked, play directly
            actuallyPlaySound(element, soundFile, pathPrefix);
        }
    };

    // The actual sound playing logic, called after potential unlock
    const actuallyPlaySound = (element, soundFile, pathPrefix) => {
        stopCurrentAudio(); // Stop any currently playing sound
        activeElement = element;
        
        audioPlayer.src = `${pathPrefix}${soundFile}`;
        audioPlayer.load(); // Ensure the new source is loaded
        const playPromise = audioPlayer.play();

        if (playPromise !== undefined) {
            playPromise.then(() => {
                element.classList.add('playing');
            }).catch(error => { // This is the catch for the actual playback attempt
                console.error(`Actual playback failed for ${soundFile}:`, error, audioPlayer.error);
                // Ensure UI is cleaned up if play fails
                if (activeElement === element) { // Check if it's still the active one
                    stopCurrentAudio();
                }
            });
        }
        // No explicit 'else' for non-promise play() as modern iOS Safari (on iPhone 10) fully supports promises for media playback.
        // If this were for much older browsers, non-promise handling would be needed.
    };

    const createSoundCard = (soundObj) => {
        const cardWrapper = document.createElement('div');
        cardWrapper.className = 'sound-card';

        const ipaSymbolContainer = document.createElement('div');
        ipaSymbolContainer.className = 'ipa-symbol-container';
        ipaSymbolContainer.innerHTML = `<h2 class="ipa-symbol">${soundObj.symbol}</h2>`;
        
        ipaSymbolContainer.addEventListener('click', () => {
            playSound(ipaSymbolContainer, soundObj.phonemeFile, 'assets/sound/ukrainian-sounds/');
        });

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
                playSound(audioIcon, example.audioFile, 'assets/sound/ukrainian-words/');
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
