import { commonTokens, declareFactoryPlugin, Injector, OptionsContext, PluginKind, tokens } from '@stryker-mutator/api/plugin';
import { JavaScriptMutator } from './JavaScriptMutator';
import { nodeMutators } from './mutators';
import { NODE_MUTATORS_TOKEN } from './mutators/NodeMutator';

export const strykerPlugins = [
  declareFactoryPlugin(PluginKind.Mutator, 'javascript', javaScriptMutatorFactory)
];

function javaScriptMutatorFactory(injector: Injector<OptionsContext>): JavaScriptMutator {
  return injector
    .provideValue(NODE_MUTATORS_TOKEN, nodeMutators)
    .injectClass(JavaScriptMutator);
}
javaScriptMutatorFactory.inject = tokens(commonTokens.injector);
