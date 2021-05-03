import React from 'react'

const CreateOperation = () => {
	return (
		<form>
			<div className='row'>
				<div className='col-sm'>
					<label for='amount'>Amount</label>
					<input
						required='required'
						type='int'
						className='form-control'
						id='amount'
					></input>
				</div>
				<div className='col-sm'>
					<label for='concept'>Concept Of</label>
					<input
						required='required'
						type='text'
						className='form-control'
						id='concept Of'
					></input>
				</div>
				<div className='form-group col-sm'>
					<label for="date">Date</label>
					<input type="date"
						placeholder="yyyy-dd-mm"
						min="1000-01-01"
						max="3000-01-01"
						required="required"
						type="text"
						className="form-control"
					/>
				</div>
				<select class="form-select-sm form-select-lg mb-3" aria-label="Default select example">
					<option selected>Select Operation Type</option>
					<option value="1">Income</option>
					<option value="2">Expense</option>
					
				</select>
			</div>
			<div className='row'>
				<div className='col-sm'>
					<button type='submit' className='btn btn-primary mt-3'>
						Save
					</button>
				</div>
			</div>
		</form>
	);
};

export default CreateOperation;
