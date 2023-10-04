import './Create.css'


function Create() {
  return (
    <div>
<div>
    <TextField
            label="With normal TextField"
            id="standard-start-adornment"
            sx={{ m: 1, width: '25ch' }}
            InputProps={{
              startAdornment: <InputAdornment position="start">kg</InputAdornment>,
            }}
            variant="standard"
          />
</div>

    </div>

  )
}

export default Create