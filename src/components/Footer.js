import React from 'react'
import '../css/style.css'
function Footer() {
  return (
    <div className='site-footer'>
      <div className='footer-top row'>

        <div className="footer-desc-col col-md-5">
          <p>freeCodeCamp is a donor-supported tax-exempt 501(c)(3) charitable organization (United States Federal Tax Identification Number: 82-0779546).</p>
          <p>Our mission: to help people learn to code for free. We accomplish this by creating thousands of videos, articles, and interactive coding lessons - all freely available to the public.</p>
          <p>Donations to freeCodeCamp go toward our education initiatives, and help pay for servers, services, and staff.</p>
          <p className="footer-donation">You can <a className="inline" href="/donate">make a tax-deductible donation here</a>.</p>
        </div>

        <div className="trending-guides  col-md-5">
          <h2 id="trending-guides" className="col-header">Trending Guides</h2>
          <ul aria-labelledby="trending-guides" className="trending-guides-articles">
            <li><a href="https://www.freecodecamp.org/news/how-to-format-a-date-with-javascript-date-formatting-in-js/" rel="noopener noreferrer" target="_blank">Date Formatting in JS</a></li>
            <li><a href="https://www.freecodecamp.org/news/java-iterator-hashmap-how-to-iterate-through-a-hashmap-with-a-loop/" rel="noopener noreferrer" target="_blank">Java Iterator Hashmap</a></li>
            <li><a href="https://www.freecodecamp.org/news/git-abort-merge-how-to-cancel-a-merge-in-git/" rel="noopener noreferrer" target="_blank">Cancel a Merge in Git</a></li>
            <li><a href="https://www.freecodecamp.org/news/what-is-a-linked-list-types-and-examples/" rel="noopener noreferrer" target="_blank">What is a Linked List?</a></li>
            <li><a href="https://www.freecodecamp.org/news/how-to-install-java-in-ubuntu/" rel="noopener noreferrer" target="_blank">Install Java in Ubuntu</a></li>
            <li><a href="https://www.freecodecamp.org/news/python-tenary-operator/" rel="noopener noreferrer" target="_blank">Python Ternary Operator</a></li>
            <li><a href="https://www.freecodecamp.org/news/full-stack-engineer-career-guide/" rel="noopener noreferrer" target="_blank">Full Stack Career Guide</a></li>
            <li><a href="https://www.freecodecamp.org/news/python-sort-dictionary-by-key/" rel="noopener noreferrer" target="_blank">Python Sort Dict by Key</a></li>
            <li><a href="https://www.freecodecamp.org/news/smart-quotes-single-quote-and-double-quotation-mark-for-copy-paste/" rel="noopener noreferrer" target="_blank">Smart Quotes Copy/Paste</a></li>
            <li><a href="https://www.freecodecamp.org/news/javascript-array-length-tutorial/" rel="noopener noreferrer" target="_blank">JavaScript Array Length</a></li>
            <li><a href="https://www.freecodecamp.org/news/how-to-use-sets-in-python/" rel="noopener noreferrer" target="_blank">Sets in Python</a></li>
            <li><a href="https://www.freecodecamp.org/news/kotlin-vs-java/" rel="noopener noreferrer" target="_blank">Kotlin vs Java</a></li>
            <li><a href="https://www.freecodecamp.org/news/sql-temp-table-how-to-create-a-temporary-sql-table/" rel="noopener noreferrer" target="_blank">SQL Temp Table</a></li>
            <li><a href="https://www.freecodecamp.org/news/how-to-use-html-forms/" rel="noopener noreferrer" target="_blank">HTML Form Basics</a></li>
            <li><a href="https://www.freecodecamp.org/news/how-to-add-a-multiline-comment-in-yaml/" rel="noopener noreferrer" target="_blank">Comments in YAML</a></li>
            <li><a href="https://www.freecodecamp.org/news/pandas-count-rows-how-to-get-the-number-of-rows-in-a-dataframe/" rel="noopener noreferrer" target="_blank">Pandas Count Rows</a></li>
            <li><a href="https://www.freecodecamp.org/news/python-end-program-how-to-exit-a-python-program-in-terminal/" rel="noopener noreferrer" target="_blank">Python End Program</a></li>
            <li><a href="https://www.freecodecamp.org/news/xor-py-how-the-python-xor-operator-works/" rel="noopener noreferrer" target="_blank">Python XOR Operator</a></li>
            <li><a href="https://www.freecodecamp.org/news/how-to-check-if-a-key-exists-in-a-dictionary-in-python/" rel="noopener noreferrer" target="_blank">Python Dict Has Key</a></li>
            <li><a href="https://www.freecodecamp.org/news/python-list-to-string-how-to-convert-lists-in-python/" rel="noopener noreferrer" target="_blank">Python List to String</a></li>
            <li><a href="https://www.freecodecamp.org/news/python-exit-how-to-use-an-exit-function-in-python-to-stop-a-program/" rel="noopener noreferrer" target="_blank">Exit Function in Python</a></li>
            <li><a href="https://www.freecodecamp.org/news/string-to-array-in-java-how-to-convert-a-string-to-an-array-in-java/" rel="noopener noreferrer" target="_blank">String to Array in Java</a></li>
            <li><a href="https://www.freecodecamp.org/news/python-import-from-file-importing-local-files-in-python/" rel="noopener noreferrer" target="_blank">Python Import from File</a></li>
            <li><a href="https://www.freecodecamp.org/news/how-to-parse-a-string-in-python/" rel="noopener noreferrer" target="_blank">Parse a String in Python</a></li><li><a href="https://www.freecodecamp.org/news/python-merge-dictionaries-merging-two-dicts-in-python/" rel="noopener noreferrer" target="_blank">Python Merge Dictionaries</a></li>
            <li><a href="https://www.freecodecamp.org/news/how-to-copy-a-directory-in-linux-with-the-cp-command/" rel="noopener noreferrer" target="_blank">Copy a Directory in Linux</a></li>
            <li><a href="https://www.freecodecamp.org/news/reactive-programming-beginner-guide/" rel="noopener noreferrer" target="_blank">Reactive Programming Guide</a></li>
            <li><a href="https://www.freecodecamp.org/news/how-to-center-text-vertically-with-css/" rel="noopener noreferrer" target="_blank">Center Text Vertically CSS</a></li>
            <li><a href="https://www.freecodecamp.org/news/greedy-algorithms/" rel="noopener noreferrer" target="_blank">What’s a Greedy Algorithm?</a></li><li><a href="https://www.freecodecamp.org/news/how-to-edit-git-commit-messages-with-git-amend/" rel="noopener noreferrer" target="_blank">Edit Commit Messages in Git</a></li>
          </ul>
          <div className="spacer" style={{ padding: '15px 0px' }}></div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="our-nonprofit"><a href="https://www.freecodecamp.org/news/about/" rel="noopener noreferrer" target="_blank">About</a><a href="https://www.linkedin.com/school/free-code-camp/people/" rel="noopener noreferrer" target="_blank">Alumni Network</a><a href="https://github.com/freeCodeCamp/" rel="noopener noreferrer" target="_blank">Open Source</a><a href="https://www.freecodecamp.org/shop/" rel="noopener noreferrer" target="_blank">Shop</a><a href="https://www.freecodecamp.org/news/support/" rel="noopener noreferrer" target="_blank">Support</a><a href="https://www.freecodecamp.org/news/sponsors/" rel="noopener noreferrer" target="_blank">Sponsors</a><a href="https://www.freecodecamp.org/news/academic-honesty-policy/" rel="noopener noreferrer" target="_blank">Academic Honesty</a><a href="https://www.freecodecamp.org/news/code-of-conduct/" rel="noopener noreferrer" target="_blank">Code of Conduct</a><a href="https://www.freecodecamp.org/news/privacy-policy/" rel="noopener noreferrer" target="_blank">Privacy Policy</a><a href="https://www.freecodecamp.org/news/terms-of-service/" rel="noopener noreferrer" target="_blank">Terms of Service</a><a href="https://www.freecodecamp.org/news/copyright-policy/" rel="noopener noreferrer" target="_blank">Copyright Policy</a>
        </div>
      </div>

    </div>
  )
}

export default Footer