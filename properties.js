/**
 * Title shown on the main page
 * @type {string}
 */
var title = 'FPGA Acceleration and Quantization of Lightweight CNNs for Edge Inference';

/**
 * Relative path to the data directory
 * @type {string}
 */
var dataDir = 'data/';

/**
 * Relative path to the js directory
 * @type {string}
 */
var jsDir = 'js/';

/**
 * Relative path to the styles directory
 * @type {string}
 */
var stylesDir = 'styles/';

/**
 * Options for displaying tag clouds.
 */
var tagCloudOptions = [{
    field: 'keywords',
    title: 'Keywords',
    minTagFrequency: 1
}, {
    field: 'author',
    title: 'Authors',
    minTagFrequency: 1
}, {
    field: 'year',
    title: 'Year',
    minTagFrequency: 1
}];

/**
 * If BibTeX entries (and tags) should be editable
 * @type {boolean}
 */
var editable = false;

/**
 * Subtitle (set to null to deactivate)
 */
var paper = {
    html: 'Literature review for <b>COMP4126 Coursework 3</b> — 13 papers on FPGA acceleration of lightweight CNNs',
    id: 'Jiang2023HighThroughput'
};

/**
 * Extra pages
 */
var extraPages = {
    'about': 'about.html'
};

var customStyle = '';

var citations = null;
