import React from 'react'

export default function Bank() {
  return (
    <div>
      <div className="salary-info bg-[#16191c] p-4">
        <header>
          <h1>Basic Salary Information</h1>
        </header>
        <div>
          <div className="basis">
            <h1>Salary basis <strong className='text-[#F62d51]'>*</strong></h1>
            <select name="basis-type">
              <option value="select-salary-basis-type" selected>Select salary basis type</option>
              <option value="hourly">Hourly</option>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>

          <div className="amount">
            <h1>Salary amount <small>per month</small></h1>
            <div>
              <span>$</span><input type="text" value="0.00" placeholder="Type your salary amount" />
            </div>
          </div>

          <div className="basis">
            <h1>Payment type</h1>
            <select name="basis-type">
              <option value="select-salary-basis-type" selected>Select payment type</option>
              <option value="bank transfer">Bank transfer</option>
              <option value="check">Check</option>
              <option value="cash">Cash</option>
            </select>
          </div>
        </div>

        <div className="pf-info">
          <div className="basis">
            <h1>PF contribution</h1>
            <select name="basis-type">
              <option value="select-pf-contribution" selected>Select PF contribution</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <div className="basis">
            <h1>PF No.<strong>*</strong></h1>
            <select name="basis-type">
              <option value="select-pf-contribution" selected>Select PF contribution</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <div className="employee-pf-rate">
            <h1>Employee PF rate</h1>
            <select name="employee-pf-rate">
              <option value="select-pf-contribution" selected>Select PF contribution</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <div className="addition-rate">
            <div>
              <h1>Additional rate<strong>*</strong></h1>
              <select name="addition-rate">
                <option value="select-additional-rate" selected>Select additional rate</option>
                <option value="0%">0%</option>
                <option value="1%">1%</option>
                <option value="2%">2%</option>
                <option value="3%">3%</option>
                <option value="4%">4%</option>
                <option value="5%">5%</option>
                <option value="6%">6%</option>
                <option value="7%">7%</option>
                <option value="8%">8%</option>
                <option value="9%">9%</option>
                <option value="10%">10%</option>
              </select>
            </div>
            <div>
              <h1>Total rate</h1>
              <input type="text" placeholder="N/A" value="11%" />
            </div>
          </div>

          <div className="employee-pf-rate">
            <h1>Employee PF rate</h1>
            <select name="employee-pf-rate">
              <option value="select-pf-contribution" selected>Select PF contribution</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <div className="addition-rate">
            <div>
              <h1>Additional rate<strong>*</strong></h1>
              <select name="addition-rate">
                <option value="select-additional-rate" selected>Select additional rate</option>
                <option value="0%">0%</option>
                <option value="1%">1%</option>
                <option value="2%">2%</option>
                <option value="3%">3%</option>
                <option value="4%">4%</option>
                <option value="5%">5%</option>
                <option value="6%">6%</option>
                <option value="7%">7%</option>
                <option value="8%">8%</option>
                <option value="9%">9%</option>
                <option value="10%">10%</option>
              </select>
            </div>
            <div>
              <h1>Total rate</h1>
              <input type="text" placeholder="N/A" value="11%" />
            </div>
          </div>
        </div>

        <div className='esi-info'>
          <header>
            <h1>ESI Information</h1>
          </header>

          <div className="esi-form">
            <div className="esi-contribution">
              <h1>Employee PF rate</h1>
              <select name="esi-contribution">
                <option value="select-esi-contribution" selected>Select ESI contribution</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            <div className="employee-pf-rate">
              <h1>ESI No <strong>*</strong></h1>
              <select name="employee-pf-rate">
                <option value="select-pf-contribution" selected>Select PF contribution</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            <div className="employee-pf-rate">
              <h1>Employee ESI rate</h1>
              <select name="employee-pf-rate">
                <option value="select-pf-contribution" selected>Select PF contribution</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            <div className="addition-rate">
              <div>
                <h1>Additional rate<strong>*</strong></h1>
                <select name="addition-rate">
                  <option value="select-additional-rate" selected>Select additional rate</option>
                  <option value="0%">0%</option>
                  <option value="1%">1%</option>
                  <option value="2%">2%</option>
                  <option value="3%">3%</option>
                  <option value="4%">4%</option>
                  <option value="5%">5%</option>
                  <option value="6%">6%</option>
                  <option value="7%">7%</option>
                  <option value="8%">8%</option>
                  <option value="9%">9%</option>
                  <option value="10%">10%</option>
                </select>
              </div>
              <div>
                <h1>Total rate</h1>
                <input type="text" placeholder="N/A" value="11%" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
