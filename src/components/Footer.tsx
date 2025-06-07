
import { Separator } from "@/components/ui/separator";
import { Heart, Shield, Mail, FileText } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-slate-300">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Heart className="w-8 h-8 text-trust-400" />
              <span className="text-xl font-heading font-bold text-white">Sinais de Esperança</span>
            </div>
            <p className="text-sm leading-relaxed">
              Ajudando mães a compreenderem melhor seus filhos e encontrarem direção 
              na jornada do desenvolvimento infantil.
            </p>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Suporte</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-trust-400 transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Contato
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-trust-400 transition-colors">
                  Central de Ajuda
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-trust-400 transition-colors">
                  Como acessar o eBook
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-trust-400 transition-colors flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-trust-400 transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-trust-400 transition-colors">
                  Política de Reembolso
                </a>
              </li>
            </ul>
          </div>

          {/* Security */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Segurança</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Shield className="w-4 h-4 text-green-400" />
                <span>Pagamento 100% seguro</span>
              </div>
              <div className="text-sm">
                <p className="text-slate-400">Processado via Hotmart</p>
                <p className="text-slate-400">Criptografia SSL</p>
              </div>
              <div className="bg-slate-700 rounded-lg p-3 text-xs">
                <p className="text-slate-300">Este produto é comercializado com apoio da Hotmart. 
                A plataforma não faz controle editorial prévio dos produtos vendidos, 
                nem avalia a tecnicidade e experiência daqueles que os produzem.</p>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-slate-700" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-slate-400">
            © 2024 Sinais de Esperança. Todos os direitos reservados.
          </p>
          
          <div className="flex items-center gap-4 text-slate-400">
            <span>Desenvolvido com</span>
            <Heart className="w-4 h-4 text-red-400" />
            <span>para mães especiais</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
