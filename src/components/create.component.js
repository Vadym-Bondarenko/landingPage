import { Component } from '../core/component'
import { Form } from '../core/form'
import { Validators } from '../core/Validators'

export class CreateComponent extends Component {
    constructor(id) {
        super(id)
    }

    init() {
        this.$el.addEventListener('submit', submitHandler.bind(this))

        this.form = new Form(this.$el, {
            firstName: [Validators.required],
            telephone: [Validators.required, Validators.minLength(8)]
        })

    }
}

function submitHandler() {

    if (this.form.isValid()) {

        this.form.clear()

        console.log('Submit', formData)

    }

}