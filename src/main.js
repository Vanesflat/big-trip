import PointsModel from './model/points-model.js';
import ListPresenter from './presenter/list-presenter.js';
import TripInfoPresenter from './presenter/trip-info-presenter.js';
import { render } from './render.js';
import FilterView from './view/filter-view.js';
import SortView from './view/sort-view.js';

const tripMain = document.querySelector('.trip-main');
const tripFilterContainer = tripMain.querySelector('.trip-controls__filters');
const siteMain = document.querySelector('.page-main');
const tripEventsContainer = siteMain.querySelector('.trip-events');
const pointsModel = new PointsModel();
const listPresenter = new ListPresenter({
  listContainer: tripEventsContainer,
  pointsModel
});
const tripInfoPresenter = new TripInfoPresenter({
  tripInfoContainer: tripMain
});

render(new FilterView(), tripFilterContainer);
render(new SortView(), tripEventsContainer);

tripInfoPresenter.init();
listPresenter.init();
