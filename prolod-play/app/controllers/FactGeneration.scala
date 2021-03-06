package controllers

import models.ViewFormats._
import models._
import play.api.libs.json._
import play.api.mvc.{Action, Controller}

object FactGeneration extends Controller {

  def getFacts(dataset: String, group: String) = Action {
    val data: List[Fact] = List(Fact("s", "p", "o"))
    val json = Json.obj("data" -> data)
    Ok(json)
  }

}
