import { PlusIcon } from '@heroicons/react/solid';
import axios from 'axios';
import { useForm } from "react-hook-form";
import Table from './components/Table'

function App() {
  const { handleSubmit, register,reset, formState: { errors } } = useForm();
  const onSubmit = data => {
    axios.post("https://serene-brook-99567.herokuapp.com/hobby", data)
      .then(res => reset())
  };


  return (
    <div>
      <Table />

      <div className="flex items-center justify-center my-10">
        <label for="addmore" className="btn btn-modal w-3/4" >Add More <PlusIcon height={18} /></label>
      </div>
      <input type="checkbox" id="addmore" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box pb-14 relative">
          <label for="addmore" class="btn btn-sm btn-circle btn-error absolute right-2 top-2">✕</label>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className='text-2xl text-center my-4'>Please Fill Up the form</h1>
            <div className='w-3/4 mx-auto space-y-3'>
              <div>
                <input
                  className='input w-full border-2 border-gray-300 focus:border-green-300 focus:outline-none'
                  placeholder="Please enter your name"
                  {...register("name", {
                    required: "Please Enter Your Name"
                  })}
                />
                {errors.name && <p className='my-3 text-red-500'>{errors.name.message}</p>}
              </div>
              <div>
                <input
                  type="email"
                  className='input w-full border-2 border-gray-300 focus:border-green-300 focus:outline-none'
                  placeholder="Please enter your email"
                  {...register("email", {
                    required: "Please enter a valid email",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Please enter a valid email",
                    }
                  })}
                />
                {errors.email && <p className='my-3 text-red-500'>{errors.email.message}</p>}
              </div>
              <div>
                <input
                  className='input w-full border-2 border-gray-300 focus:border-green-300 focus:outline-none'
                  placeholder="Please enter your phone"
                  {...register("phone", {
                    required: "Please Enter Your Phone",
                    pattern: {
                      value: /^\(?(\d{4})\)?[- ]?(\d{3})[- ]?(\d{4})$/,
                      message: "please provide a phone number with 11 digits only"
                    }
                  })}
                />
                {errors.phone && <p className='my-3 text-red-500'>{errors.phone.message}</p>}
              </div>
              <div>
                <input
                  className='input w-full border-2 border-gray-300 focus:border-green-300 focus:outline-none'
                  placeholder="Please enter your hobbies"
                  {...register("hobbies", {
                    required: "Please Enter Your Hobbies"
                  })}
                />
                {errors.hobbies && <p className='my-3 text-red-500'>{errors.hobbies.message}</p>}
              </div>
              <button className='btn btn-outline btn-success w-full'>
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
