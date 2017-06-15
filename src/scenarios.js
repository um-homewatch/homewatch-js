class Scenarios {
  constructor(axios, home) {
    this.axios = axios;
    this.home = home;
  }

  /**
   * Returns the home's scenarios
   * @return {Promise}
   */
  listScenarios() {
    return this.axios.get(`/homes/${this.home.id}/scenarios`);
  }

  /**
   * Gets a scecnario
   * @param {number} id
   * @return {Promise}
   */
  getScenario(id) {
    return this.axios.get(`/homes/${this.home.id}/scenarios/${id}`);
  }

  /**
   * Creates a scenario
   * @param {Object} scenario
   * @param {string} scenario.name
   * @return {Promise}
   */
  createScenario(scenario) {
    return this.axios.post(`/homes/${this.home.id}/scenarios`, {
      scenario,
    });
  }

  /**
   * Updates a scenario
   * @param {number} id
   * @param {Object} scenario
   * @param {string} scenario.name
   * @return {Promise}
   */
  updateScenario(id, scenario) {
    return this.axios.put(`/homes/${this.home.id}/scenarios/${id}`, {
      scenario,
    });
  }

  /**
   * Deletes a scenario
   * @param {number} id
   * @return {Promise}
   */
  deleteScenario(id) {
    return this.axios.delete(`/homes/${this.home.id}/scenarios/${id}`);
  }

  /**
   * Applies a scenario
   * @return {Promise}
   */
  applyScenario(id) {
    return this.axios.delete(`/scenarios/${id}/apply`);
  }
}

module.exports = Scenarios;
