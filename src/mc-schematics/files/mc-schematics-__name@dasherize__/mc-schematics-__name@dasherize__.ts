console.log("Hello <%= name %>");

@Component({
    selector: "hello-<%= dasherize(name) %>"
})
export class MCSchematics<%= classify(name) %>Component {

}