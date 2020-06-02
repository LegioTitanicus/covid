import React, { useState } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import "./UserForm.css";

const UserForm = () => {
  const [age, setAge] = useState(null);
  const [sex, setSex] = useState(null);
  const [diagnosis, setDiagnosis] = useState(null);

  const ageValidator = () => {
    if (age > 110) {
      // Eventually will directly reference max age listed in studies
      alert("Unfortunately there are no studies for that age parameter.");
    }
  };

  const handleChange = (event) => {
    setSex(event.target.value);
  };

  return (
    <div>
      <form>
        <fieldset>
          <legend>Search Trials/Data Aggregators</legend>

          <label>
            Age:
            <input
              type="number"
              name="age"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <button onClick={() => setAge(0)}>Clear</button>
          </label>
          <br />

          {/* <fieldset>
            <legend>Sex</legend>
            <input type="radio" id="male" name="gender" value={sex} />
            <label htmlFor="male">Male</label>
            <br />
            <input type="radio" id="female" name="gender" value={sex} />
            <label htmlFor="female">Female</label>
          </fieldset> */}

          <FormControl component="fieldset">
            <FormLabel component="legend">Sex</FormLabel>
            <RadioGroup
              aria-label="sex"
              name="gender"
              value={sex}
              onChange={handleChange}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>

          <br />
          <label>Have you received a positive COVID diagnosis?</label>
          <select>
            <option value="Unknown">Unknown</option>
            <option value="Confirmed Diagnosis">Confirmed Diagnosis</option>
          </select>
          <br />

          <input type="submit" value="Look For Research!" />
        </fieldset>
      </form>
    </div>
  );
};

export default UserForm;
