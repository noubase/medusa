import Handlebars from "handlebars"
import { PageEvent } from "typedoc"
import { MarkdownTheme } from "../../theme.js"

export default function (theme: MarkdownTheme) {
  Handlebars.registerHelper(
    "ifShowBreadcrumbs",
    function (this: PageEvent, options: Handlebars.HelperOptions) {
      return theme.hideBreadcrumbs ? options.inverse(this) : options.fn(this)
    }
  )
}
