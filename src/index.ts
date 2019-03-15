import { Application, Graphics, Container } from 'pixi.js';
import { AsciiFilter, DotFilter } from 'pixi-filters';

const app = new Application({
    backgroundColor: 0xdddddd,
    width: 400,
    height: 400,
});
document.body.appendChild(app.view);

const rect = new Graphics()
    .beginFill(0xff0000)
    .drawRect(100, 100, 200, 200);

const container = new Container();
container.addChild(rect);

container.filters = [new DotFilter()];

app.stage.addChild(container);