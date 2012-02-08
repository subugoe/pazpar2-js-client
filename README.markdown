# pz2-client
A JavaScript client to interact with Indexdata’s [pazpar2](http://www.indexdata.com/pazpar2) metasearch software and to display its search results.

2010-2012 by [Sven-S. Porst](http://earthlingsoft.net/ssp/), [SUB Göttingen](http://www.sub.uni-goettingen.de) [<porst@sub.uni-goettingen.de](mailto:porst@sub.uni-goettingen.de?subject=pz2-client)

## Usage
Include »pz2.js«, »pz2-client.js« and »pz2.css« in your HTML file to load the relevant resources.
Preserving the order of the JavaScript files is crucial. A number of parameters can be set for those scripts:

* my_serviceID: the pazpar2 service to use (needs to be set between the inclusions of the JavaScript files, the remaining variables are set after the inclusion of »pz2-client.js«)
* useGoogleBooks (boolean): whether to use Google Books cover art and preview for items with ISBN or OCLC number
* useZDB (boolean): whether to look up journal availability at the user’s IP (in German university networks) using ZDB’s Journals Online and Print service
* ZDBUseClientIP (boolean): if true, the ZDB-JOP proxy is expected to be a /zdb/, if false, the ZDB-JOP proxy is expected to be at /zdb-local/
* useHistogramForYearFacets (boolean): if true, year facets are displayed as a histogram rather than as a list
* clientIPAddress (string): 
* preferSUBOpac (boolean): 
* provideCOinSExport (boolean): if true, COinS tags are embedded with the results (for Zotero 3 and above)
* showKVKLink (boolean): if true, a link to Karlsruher Virtueller Katalog is included
* exportFormats (array of strings): format names for export links
* displaySort (array of objects): sort order





## Credits
The button and media type graphics included with the scripts were created by [Henrik Cederblad](http://cederbladdesign.com/).
