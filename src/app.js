import './css/common.css';
import layer from './components/layer/layer';
const App = function (layer) {
    var dom = document.getElementById('app');
    var layer = new layer();
    dom.innerHTML = layer.tpl;
}
new App(layer)