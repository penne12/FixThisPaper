React = require 'react'

{div, p, span, div, a, code} = r = React.DOM
e = React.createElement

HelpBoxComponent = require '../help-box'
GlitchTextComponent = require '../glitch-text'

module.exports =
  class Part3Javascript extends React.Component
    @number = 2
    @placeholder = 'Tell Troy what your name is...'
    onJavascript: (command, output, console, jsObjs) =>
      if output?
        command.output = output?.toString() || typeof output
      try
        ntype = JSJS.identifyConvertValue JSJS.Types.dynamicPtr,
          JSJS.EvaluateScript jsObjs.cx, jsObjs.glob, "typeof name"

        if ntype == 'undefined'
          command.error = if command.error
            "#{command.error || ''} Name wasn't set."
          else
            "Name wasn't set."
        else
          name = JSJS.identifyConvertValue JSJS.Types.dynamicPtr,
            JSJS.EvaluateScript jsObjs.cx, jsObjs.glob, "name"

          if name? && ntype == 'string'
            @props.onName name
            command.response = "Set name to #{name}"
          else
            command.error = "#{name} doesn't look like a name."

      catch error
        command.error = "Couldn't get name: #{error}."
        console.warn('Caught error while getting name', error)
      command
    render: ->
      div className: 'stage-3-javascript',
        p className: 'mla',
          e GlitchTextComponent, className: 'mla', text: """
          Looks like you got in. Immediatly, you want to turn off the glitches.
          The text is getting hard to read.
          """
