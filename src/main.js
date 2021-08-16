import "./scss/style.scss";
import $ from "jquery";
import "./scripts/jquery.waitforimages.min.js";
import 'bootstrap';

$(document).ready(function () {
  $('[data-toggle-second="tooltip"]').tooltip();

  $(".asiento-ocupado").waitForImages(function () {
    $(".infoAsiento").removeClass("d-none");
  });

  $(".asiento-disponible").waitForImages(function () {
    $(".infoAsiento").removeClass("d-none");
  });

  $(".asiento-locura").waitForImages(function () {
    $(".infoAsiento").removeClass("d-none");
  });

  $(".asiento-deocacion").waitForImages(function () {
    $(".infoAsiento").removeClass("d-none");
  });

  $(".asiento-insuperable").waitForImages(function () {
    $(".infoAsiento").removeClass("d-none");
  });
});

/**
 *  if you want to use bootstrap styles
 *  copy @import '~bootstrap/scss/bootstrap'; in style.scss
 */

/**
 * import multiple js files
 *
 * import { nameFunction } from "./name.js"
 */

/**
 * if you want to use bootstrap
 *
 * import 'bootstrap';
 */

/**
 * if you want to use jquery
 *
 * import $ from 'jquery';
 */
