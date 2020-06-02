import React, { useState } from "react";
import "./SubmitTrialForm.css";
import { MDCFormField } from "@material/form-field";
import { Button } from "@material-ui/core";

const SubmitTrial = () => {
  const [minAge, setMinAge] = useState(null);
  const [maxAge, setMaxAge] = useState(null);
  const [sexesIncluded, setSexesIncluded] = useState(null);
  const [diagnosis, setDiagnosis] = useState(null);
  const [sponsor, setSponsor] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div>
      <form>
        <fieldset>
          <fieldset>
            <legend>Inclusion Criteria</legend>
            <label class="mdc-text-field mdc-text-field--filled">
              <span class="mdc-text-field__ripple"></span>
              <input
                class="mdc-text-field__input"
                type="text"
                aria-labelledby="my-label-id"
              />
              <span class="mdc-floating-label" id="my-label-id">
                Hint text
              </span>
              <span class="mdc-line-ripple"></span>
            </label>
            <br />
            <Button color="primary" size="small" variant="contained">
              material button
            </Button>
            <br />
            <label>
              Minimum Age:
              <input
                type="number"
                name="minAge"
                id="minAge"
                value={minAge}
                onChange={(e) => setMinAge(e.target.value)}
              />
              <button onClick={() => setMinAge(0)}>Clear</button>
            </label>
            <br />
            <label>
              Maximum Age:
              <input
                type="number"
                name="maxAge"
                id="maxAge"
                value={maxAge}
                onChange={(e) => setMaxAge(e.target.value)}
              />
              <button onClick={() => setMaxAge(0)}>Clear</button>
            </label>
            <br />

            <label for="sexes-select">Trial is open to M/F/All: </label>

            <select
              name="sexes-select"
              id="sexes-select"
              value={sexesIncluded}
              onChange={(e) => sexesIncluded(e.target.value)}
            >
              <option value="">--Please choose an option--</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="All">All</option>
            </select>
            <br />
            <label>Have you received a positive COVID diagnosis? </label>
            <select>
              <option value="Unknown">Unknown</option>
              <option value="Confirmed Diagnosis">Confirmed Diagnosis</option>
            </select>
          </fieldset>
          <br />
          <fieldset>
            <legend>Sponsor/Description</legend>
            <label>
              Sponsor:
              <input
                type="text"
                name="sponsor"
                id="sponsor"
                value={sponsor}
                onChange={(e) => setSponsor(e.target.value)}
              />
              <button onClick={() => setSponsor("")}>Clear</button>
            </label>
            <br />
            <textarea name="description" rows="10" cols="100">
              Enter description of your study here
            </textarea>
            <button onClick={() => setDescription("")}>Clear</button>
            <br />
            <input type="submit" value="Submit" />
          </fieldset>
        </fieldset>
      </form>
    </div>
  );
};

export default SubmitTrial;
