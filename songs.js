var originalSynchronizedText = "";

function alertException(event) {
    if (this.textContent) {
	alert('Error: Invalid footnote reference at footnote "' + 
	      this.textContent +
	      '", reached from How Fix this Code:7:38.');
	return false;
    }
    else {
	return true;
    }
}

/*
 * Returns the result of non-destructively merging the two lists,
 * choosing which list to draw from next uniformly at random
 * (until one is exhausted and then choosing the other).
 */
function randomMerge(list1, list2) {
    var result = [];
    
    function coin_flip() {
	return Math.random() < 0.5;
    }
    
    /* Destructive merge into result. */
    function helper(list1, list2) {
	if (list1.length > 0 || list2.length > 0) {
	    if (list1.length == 0 || coin_flip())
		result.unshift(list2.pop());
	    else
		result.unshift(list1.pop());
	    helper(list1, list2);
	}
    }
    
    helper(list1.slice(), list2.slice());
    return result;
}

/*
 * Given a string consisting of two sentences (each of which ends
 * in a period, with no other periods), produces an array of two
 * arrays: the words of the first and second sentences (where
 * words are whitespace-delineated).
 */
function harvestWordLists(text) {
    var sentences = text.split(".", 2);
    if (sentences.length != 2)
	// Simply the text as a block in one of the two lists.
	return [[text],[]];
    
    return sentences.map(function(words) {
	return (words.trim() + ".").split(/\s+/);
    });
}

function restructureSynchronizedFootnote() {
    var footnote = document.getElementById('synchronized');
    if (footnote && originalSynchronizedText) {
	var wordLists = harvestWordLists(originalSynchronizedText);
	var mergedLists = randomMerge(wordLists[0], wordLists[1]);
	footnote.textContent = mergedLists.join(" ");
    }
}

window.onload = function() {
    var exceptionFootnote = document.getElementById('exception-footnote');
    if (exceptionFootnote)
	exceptionFootnote.onclick = alertException;
    
    var synchronizedFootnote = document.getElementById('synchronized');
    var synchronizedFootnoteRef = document.getElementById('synchronized-ref');
    if (synchronizedFootnote && synchronizedFootnote.textContent && synchronizedFootnoteRef) {
	originalSynchronizedText = synchronizedFootnote.textContent;
	restructureSynchronizedFootnote();
	synchronizedFootnoteRef.onclick = restructureSynchronizedFootnote;
    }
}
