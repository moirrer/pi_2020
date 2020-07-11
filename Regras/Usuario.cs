using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Regras
{
    public class Usuario
    {
        public int id_usuario { get; set; }
        public string nome { get; set; }
        public string email { get; set; }
        public string senha { get; set; }
        public string sexo { get; set; }
        public DateTime data_nascimento { get; set; }
        public string status { get; set; }


        public List<Usuario> Lista()
        {
            var lista = new List<Usuario>();
            var usuarioDb = new Database.Usuario();
            foreach(DataRow row in usuarioDb.Lista().Rows) {
                var usuario = new Usuario();
                usuario.id_usuario = Convert.ToInt32(row["id_usuario"]);
                usuario.nome = row["nome"].ToString();
                usuario.email = row["email"].ToString();
                usuario.senha = row["senha"].ToString();
                usuario.sexo = row["sexo"].ToString();
                usuario.data_nascimento = Convert.ToDateTime(row["data_nascimento"]);
                usuario.status = row["status"].ToString();

                lista.Add(usuario);
            }

            return lista;
        }
    }
}
