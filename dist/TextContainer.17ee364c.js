
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global = globalThis;
    var parcelRequire = $parcel$global["parcelRequire06c0"];
var parcelRegister = parcelRequire.register;
parcelRegister("cE4wx", function(module, exports) {

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $934cbace03b67b5a$export$2e2bcd8739ae039);

var $228IU = parcelRequire("228IU");
parcelRequire("d4J5n");

var $3RiQf = parcelRequire("3RiQf");
function $934cbace03b67b5a$var$TextContainer(props) {
    const margin = {
        top: 10,
        right: 10,
        bottom: 35,
        left: 35
    };
    return /*#__PURE__*/ (0, $228IU.jsxs)("div", {
        id: props.id,
        style: {
            width: '100%',
            height: '100%'
        },
        children: [
            /*#__PURE__*/ (0, $228IU.jsx)("h1", {
                children: props.title
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("p", {
                children: props.configProps.description
            })
        ]
    });
}
var $934cbace03b67b5a$export$2e2bcd8739ae039 = $934cbace03b67b5a$var$TextContainer;
$934cbace03b67b5a$var$TextContainer.propTypes = {
    id: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).string.isRequired,
    title: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).string.isRequired,
    description: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).string.isRequired,
    layout: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).shape({
        width: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).number.isRequired,
        currentCols: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).number.isRequired
    }).isRequired
};

});


//# sourceMappingURL=TextContainer.17ee364c.js.map
