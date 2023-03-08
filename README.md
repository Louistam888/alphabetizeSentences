SHORT STORY ALPHABETIZER 
TECH TEST - LOUIS TAM 

*************************
PROJECT SCOPE

The intent of this project was to take plain text from the ShortStory.txt file, and to arrange its sentences in alphabetical order. The scope of this project involved treating the entire document as a single short story. There were no specific requirements regarding programming languages to be used, programmatic correction of spelling/grammatical errors in the text, or how the results should be displayed to the user. Broad intrepretations of what constitutes a sentence was permitted. There were also no additional specifications required for styling, error handling and accessibilty. Though a mobile-friendly front-end was not required, this project will display as intended for screens down to 320px in width. There were also no explicit requirements for scalability considerations. The language of the text to be alphabetized is English. 


*************************
LANGUAGES USED

JavaScript, HTML, CSS


*************************
COMPLETED PROJECT OVERVIEW 

To meet the project requirements, the complete project treats every string ending with a period, exclamation mark or question mark as a sentence. To the greatest extent possible, quotations attributed to a character in a story were intrepreted as one sentence if the punctuation and grammar dictated that two separate sentences should be considered as one (i.e. “What colour is that car?” she asked with great curiosity.) Under this definition, multiple sentences found between a set of quotation marks were treated as separate individual sentences. This meant several intact quotations from characters were subsequently broken up and displayed as separate sentences for alphabetization. 

By default, each sentence is displayed in an unsorted, numbered list, in the same order as they appear in the txt file. Because the project requirements did not specify whether sentences were to be alphabetized in ascending or descending order, users have the option of viewing the list in either A-Z order or Z-A order. 


*************************
INSTALLATION AND USE 

A user simply needs to double click on the index.html file to begin using the application. No additional software dependencies are needed and the files should open in any mainstream internet browser window. The immediate landing page displays sentences in an unsorted order. Buttons in the header section allow the user to navigate back and forth between separate pages where the sentences are rendered in A-Z and Z-A order. 


*************************
METHODOLOGY 

Text fetched from the txt file were broken into individual sentences with the use of a regulation expression that delineated individual strings as sentences if they did not begin with a punctuation mark, but concluded with either a question mark, exclamation mark or period. Because many intact expressions from characters were broken up as individual sentences based on punctuation, additional regular expressions were used to clean up single quotation marks that did not have closing parentheses as a result of how the sentences were spliced. As much as possible, quotations marks that had both an opening and closing set of parenthesis were kept to maintain human readability. 

As noted in the overview, functions were created to ensure quotations attributed to a character were kept as a single complete sentence when the expression precedes the attribution. One function examines whether a sentence string ends with a question or exclamation mark, followed by a closing parenthesis. A second function checks if the subsequent sentence begins with a lowercase character, which would suggest both sentence strings are a single sentence that attributes an expression to a character. If these conditions are both true, a conditional statement then concatenates both strings into a single sentence string. 

Subsequent control flow statements determine whether additional functions would be applied to the array of sentences for alphabetizing, depending on the specific page where the sentences are being rendered. 

*************************
LIMITATIONS 

To the greatest extent possible, the code divides sentences in accordance with common English rules of punctuation and grammar. However, as English is often described as in irregular language, some limitations arose when strict adherence to such rules did not account for nuances in human understanding of how the English is to be intrepreted. One limitation arises at lines 282-283 in the unsorted list of sentences on index.html. Here the expression ended with a question mark and quotation mark, while the subsequent sentence attributing the expression to a character begins with a capital letter. The code thus treats both as separate sentence expressions. 

When it came to cleaning up the sentences for human readability, a regular expression can reliably eliminate instances where one quotation mark appears without a corresponding closing parenthesis. However if the number of quotation marks in a sentence is an odd number that exceeds two, this code is not able to account for which specific quotation marks are to be eliminated without sacrificing readability for the human user. 

My observation is that such challenges are excellent opportunities for AI to both detect and overcome such nuances and exceptions in human language. I have begun learning elementary Python, and am highly interested in finding out more about how machine learning can tackle and resolve these and other similar challenges. 


*************************
LESSONS LEARNED 

The most interesting thing learned in the completion of this project was how conditional statements can be used to render separate sets of code to be used on individual pages, all while assigning the corresponding values they generate to a single variable. Depending on the page, this variable would thus display a different value that is particular for a specific page. 