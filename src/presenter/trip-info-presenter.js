import TripInfoView from '../view/trip-info-view.js';
import TripRouteView from '../view/trip-route-view.js';
import TripTotalPriceView from '../view/trip-total-price-view.js';
import { render, RenderPosition } from '../render.js';

export default class TripInfoPresenter {
  #tripInfoContainer = null;

  #tripInfoComponent = new TripInfoView();

  constructor({ tripInfoContainer }) {
    this.#tripInfoContainer = tripInfoContainer;
  }

  init() {
    render(this.#tripInfoComponent, this.#tripInfoContainer, RenderPosition.AFTERBEGIN);
    render(new TripRouteView(), this.#tripInfoComponent.element);
    render(new TripTotalPriceView(), this.#tripInfoComponent.element);
  }
}
