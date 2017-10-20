var Observable = require("data/observable").Observable;
var SVG = require("nativescript-svg");
var svgParser = new SVG.ImageSourceSVG();

function createViewModel() {

    var loaded = svgParser.fromResource('images/spider-test.svg');
    if (loaded) {
        console.log("object loaded");
    } else {
        console.log("error");
    }

    // var loaded = svgParser.loadFromFile('~/images/spider-test.svg');
    var viewModel = new Observable();

    viewModel.message = loaded ? "there is object" : "there isn't object";
    viewModel.svgSrc = "";

    viewModel.onTap = function () {
        console.log("Svg source set! '~/images/nativescript.svg'");
        this.set("svgSrc", '~/images/nativescript.svg');
    }

    return viewModel;
}

exports.createViewModel = createViewModel;